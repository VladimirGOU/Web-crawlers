/*
 * This script combines, fixes & extends a long list of other scripts, most notably including:
 *
 * - https://codeshare.frida.re/@akabe1/frida-multiple-unpinning/
 * - https://codeshare.frida.re/@avltree9798/universal-android-ssl-pinning-bypass/
 * - https://pastebin.com/TVJD63uM
 */

setTimeout(function () {
  Java.perform(function () {
      console.log("---");
      console.log("Unpinning Android app...");

      /// -- Generic hook to protect against SSLPeerUnverifiedException -- ///

      // In some cases, with unusual cert pinning approaches, or heavy obfuscation, we can't
      // match the real method & package names. This is a problem! Fortunately, we can still
      // always match built-in types, so here we spot all failures that use the built-in cert
      // error type (notably this includes OkHttp), and after the first failure, we dynamically
      // generate & inject a patch to completely disable the method that threw the error.
      try {
          const UnverifiedCertError = Java.use('javax.net.ssl.SSLPeerUnverifiedException');
          UnverifiedCertError.$init.implementation = function (str) {
              console.log('  --> Unexpected SSL verification failure, adding dynamic patch...');

              try {
                  const stackTrace = Java.use('java.lang.Thread').currentThread().getStackTrace();
                  const exceptionStackIndex = stackTrace.findIndex(stack =>
                      stack.getClassName() === "javax.net.ssl.SSLPeerUnverifiedException"
                  );
                  const callingFunctionStack = stackTrace[exceptionStackIndex + 1];

                  const className = callingFunctionStack.getClassName();
                  const methodName = callingFunctionStack.getMethodName();

                  console.log(`      Thrown by ${className}->${methodName}`);

                  const callingClass = Java.use(className);
                  const callingMethod = callingClass[methodName];

                  if (callingMethod.implementation) return; // Already patched by Frida - skip it

                  console.log('      Attempting to patch automatically...');
                  const returnTypeName = callingMethod.returnType.type;

                  callingMethod.implementation = function () {
                      console.log(`  --> Bypassing ${className}->${methodName} (automatic exception patch)`);

                      // This is not a perfect fix! Most unknown cases like this are really just
                      // checkCert(cert) methods though, so doing nothing is perfect, and if we
                      // do need an actual return value then this is probably the best we can do,
                      // and at least we're logging the method name so you can patch it manually:

                      if (returnTypeName === 'void') {
                          return;
                      } else {
                          return null;
                      }
                  };

                  console.log(`      [+] ${className}->${methodName} (automatic exception patch)`);
              } catch (e) {
                  console.log('      [ ] Failed to automatically patch failure');
              }

              return this.$init(str);
          };
          console.log('[+] SSLPeerUnverifiedException auto-patcher');
      } catch (err) {
          console.log('[ ] SSLPeerUnverifiedException auto-patcher');
      }

      /// -- Specific targeted hooks: -- ///

      // HttpsURLConnection
      try {
          const HttpsURLConnection = Java.use("javax.net.ssl.HttpsURLConnection");
          HttpsURLConnection.setDefaultHostnameVerifier.implementation = function (hostnameVerifier) {
              console.log('  --> Bypassing HttpsURLConnection (setDefaultHostnameVerifier)');
              return; // Do nothing, i.e. don't change the hostname verifier
          };
          console.log('[+] HttpsURLConnection (setDefaultHostnameVerifier)');
      } catch (err) {
          console.log('[ ] HttpsURLConnection (setDefaultHostnameVerifier)');
      }
      try {
          const HttpsURLConnection = Java.use("javax.net.ssl.HttpsURLConnection");
          HttpsURLConnection.setSSLSocketFactory.implementation = function (SSLSocketFactory) {
              console.log('  --> Bypassing HttpsURLConnection (setSSLSocketFactory)');
              return; // Do nothing, i.e. don't change the SSL socket factory
          };
          console.log('[+] HttpsURLConnection (setSSLSocketFactory)');
      } catch (err) {
          console.log('[ ] HttpsURLConnection (setSSLSocketFactory)');
      }
      try {
          const HttpsURLConnection = Java.use("javax.net.ssl.HttpsURLConnection");
          HttpsURLConnection.setHostnameVerifier.implementation = function (hostnameVerifier) {
              console.log('  --> Bypassing HttpsURLConnection (setHostnameVerifier)');
              return; // Do nothing, i.e. don't change the hostname verifier
          };
          console.log('[+] HttpsURLConnection (setHostnameVerifier)');
      } catch (err) {
          console.log('[ ] HttpsURLConnection (setHostnameVerifier)');
      }

      // SSLContext
      try {
          const X509TrustManager = Java.use('javax.net.ssl.X509TrustManager');
          const SSLContext = Java.use('javax.net.ssl.SSLContext');

          const TrustManager = Java.registerClass({
              // Implement a custom TrustManager
              name: 'dev.asd.test.TrustManager',
              implements: [X509TrustManager],
              methods: {
                  checkClientTrusted: function (chain, authType) { },
                  checkServerTrusted: function (chain, authType) { },
                  getAcceptedIssuers: function () { return []; }
              }
          });

          // Prepare the TrustManager array to pass to SSLContext.init()
          const TrustManagers = [TrustManager.$new()];

          // Get a handle on the init() on the SSLContext class
          const SSLContext_init = SSLContext.init.overload(
              '[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom'
          );

          // Override the init method, specifying the custom TrustManager
          SSLContext_init.implementation = function (keyManager, trustManager, secureRandom) {
              console.log('  --> Bypassing Trustmanager (Android < 7) request');
              SSLContext_init.call(this, keyManager, TrustManagers, secureRandom);
          };
          console.log('[+] SSLContext');
      } catch (err) {
          console.log('[ ] SSLContext');
      }

      // TrustManagerImpl (Android > 7)
      try {
          const array_list = Java.use("java.util.ArrayList");
          const TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');

          // This step is notably what defeats the most common case: network security config
          TrustManagerImpl.checkTrustedRecursive.implementation = function(a1, a2, a3, a4, a5, a6) {
              console.log('  --> Bypassing TrustManagerImpl checkTrusted ');
              return array_list.$new();
          }

          TrustManagerImpl.verifyChain.implementation = function (untrustedChain, trustAnchorChain, host, clientAuth, ocspData, tlsSctData) {
              console.log('  --> Bypassing TrustManagerImpl verifyChain: ' + host);
              return untrustedChain;
          };
          console.log('[+] TrustManagerImpl');
      } catch (err) {
          console.log('[ ] TrustManagerImpl');
      }

      // OkHTTPv3 (quadruple bypass)
      try {
          // Bypass OkHTTPv3 {1}
          const okhttp3_Activity_1 = Java.use('okhttp3.CertificatePinner');
          okhttp3_Activity_1.check.overload('java.lang.String', 'java.util.List').implementation = function (a, b) {
              console.log('  --> Bypassing OkHTTPv3 (list): ' + a);
              return;
          };
          console.log('[+] OkHTTPv3 (list)');
      } catch (err) {
          console.log('[ ] OkHTTPv3 (list)');
      }
      try {
          // Bypass OkHTTPv3 {2}
          // This method of CertificatePinner.check could be found in some old Android app
          const okhttp3_Activity_2 = Java.use('okhttp3.CertificatePinner');
          okhttp3_Activity_2.check.overload('java.lang.String', 'java.security.cert.Certificate').implementation = function (a, b) {
              console.log('  --> Bypassing OkHTTPv3 (cert): ' + a);
              return;
          };
          console.log('[+] OkHTTPv3 (cert)');
      } catch (err) {
          console.log('[ ] OkHTTPv3 (cert)');
      }
      try {
          // Bypass OkHTTPv3 {3}
          const okhttp3_Activity_3 = Java.use('okhttp3.CertificatePinner');
          okhttp3_Activity_3.check.overload('java.lang.String', '[Ljava.security.cert.Certificate;').implementation = function (a, b) {
              console.log('  --> Bypassing OkHTTPv3 (cert array): ' + a);
              return;
          };
          console.log('[+] OkHTTPv3 (cert array)');
      } catch (err) {
          console.log('[ ] OkHTTPv3 (cert array)');
      }
      try {
          // Bypass OkHTTPv3 {4}
          const okhttp3_Activity_4 = Java.use('okhttp3.CertificatePinner');
          okhttp3_Activity_4['check$okhttp'].implementation = function (a, b) {
              console.log('  --> Bypassing OkHTTPv3 ($okhttp): ' + a);
              return;
          };
          console.log('[+] OkHTTPv3 ($okhttp)');
      } catch (err) {
          console.log('[ ] OkHTTPv3 ($okhttp)');
      }

      // Trustkit (triple bypass)
      try {
          // Bypass Trustkit {1}
          const trustkit_Activity_1 = Java.use('com.datatheorem.android.trustkit.pinning.OkHostnameVerifier');
          trustkit_Activity_1.verify.overload('java.lang.String', 'javax.net.ssl.SSLSession').implementation = function (a, b) {
              console.log('  --> Bypassing Trustkit OkHostnameVerifier(SSLSession): ' + a);
              return true;
          };
          console.log('[+] Trustkit OkHostnameVerifier(SSLSession)');
      } catch (err) {
          console.log('[ ] Trustkit OkHostnameVerifier(SSLSession)');
      }
      try {
          // Bypass Trustkit {2}
          const trustkit_Activity_2 = Java.use('com.datatheorem.android.trustkit.pinning.OkHostnameVerifier');
          trustkit_Activity_2.verify.overload('java.lang.String', 'java.security.cert.X509Certificate').implementation = function (a, b) {
              console.log('  --> Bypassing Trustkit OkHostnameVerifier(cert): ' + a);
              return true;
          };
          console.log('[+] Trustkit OkHostnameVerifier(cert)');
      } catch (err) {
          console.log('[ ] Trustkit OkHostnameVerifier(cert)');
      }
      try {
          // Bypass Trustkit {3}
          const trustkit_PinningTrustManager = Java.use('com.datatheorem.android.trustkit.pinning.PinningTrustManager');
          trustkit_PinningTrustManager.checkServerTrusted.implementation = function () {
              console.log('  --> Bypassing Trustkit PinningTrustManager');
          };
          console.log('[+] Trustkit PinningTrustManager');
      } catch (err) {
          console.log('[ ] Trustkit PinningTrustManager');
      }

      // Appcelerator Titanium
      try {
          const appcelerator_PinningTrustManager = Java.use('appcelerator.https.PinningTrustManager');
          appcelerator_PinningTrustManager.checkServerTrusted.implementation = function () {
              console.log('  --> Bypassing Appcelerator PinningTrustManager');
          };
          console.log('[+] Appcelerator PinningTrustManager');
      } catch (err) {
          console.log('[ ] Appcelerator PinningTrustManager');
      }

      // OpenSSLSocketImpl Conscrypt
      try {
          const OpenSSLSocketImpl = Java.use('com.android.org.conscrypt.OpenSSLSocketImpl');
          OpenSSLSocketImpl.verifyCertificateChain.implementation = function (certRefs, JavaObject, authMethod) {
              console.log('  --> Bypassing OpenSSLSocketImpl Conscrypt');
          };
          console.log('[+] OpenSSLSocketImpl Conscrypt');
      } catch (err) {
          console.log('[ ] OpenSSLSocketImpl Conscrypt');
      }

      // OpenSSLEngineSocketImpl Conscrypt
      try {
          const OpenSSLEngineSocketImpl_Activity = Java.use('com.android.org.conscrypt.OpenSSLEngineSocketImpl');
          OpenSSLEngineSocketImpl_Activity.verifyCertificateChain.overload('[Ljava.lang.Long;', 'java.lang.String').implementation = function (a, b) {
              console.log('  --> Bypassing OpenSSLEngineSocketImpl Conscrypt: ' + b);
          };
          console.log('[+] OpenSSLEngineSocketImpl Conscrypt');
      } catch (err) {
          console.log('[ ] OpenSSLEngineSocketImpl Conscrypt');
      }

      // OpenSSLSocketImpl Apache Harmony
      try {
          const OpenSSLSocketImpl_Harmony = Java.use('org.apache.harmony.xnet.provider.jsse.OpenSSLSocketImpl');
          OpenSSLSocketImpl_Harmony.verifyCertificateChain.implementation = function (asn1DerEncodedCertificateChain, authMethod) {
              console.log('  --> Bypassing OpenSSLSocketImpl Apache Harmony');
          };
          console.log('[+] OpenSSLSocketImpl Apache Harmony');
      } catch (err) {
          console.log('[ ] OpenSSLSocketImpl Apache Harmony');
      }

      // PhoneGap sslCertificateChecker (https://github.com/EddyVerbruggen/SSLCertificateChecker-PhoneGap-Plugin)
      try {
          const phonegap_Activity = Java.use('nl.xservices.plugins.sslCertificateChecker');
          phonegap_Activity.execute.overload('java.lang.String', 'org.json.JSONArray', 'org.apache.cordova.CallbackContext').implementation = function (a, b, c) {
              console.log('  --> Bypassing PhoneGap sslCertificateChecker: ' + a);
              return true;
          };
          console.log('[+] PhoneGap sslCertificateChecker');
      } catch (err) {
          console.log('[ ] PhoneGap sslCertificateChecker');
      }

      // IBM MobileFirst pinTrustedCertificatePublicKey (double bypass)
      try {
          // Bypass IBM MobileFirst {1}
          const WLClient_Activity_1 = Java.use('com.worklight.wlclient.api.WLClient');
          WLClient_Activity_1.getInstance().pinTrustedCertificatePublicKey.overload('java.lang.String').implementation = function (cert) {
              console.log('  --> Bypassing IBM MobileFirst pinTrustedCertificatePublicKey (string): ' + cert);
              return;
          };
          console.log('[+] IBM MobileFirst pinTrustedCertificatePublicKey (string)');
      } catch (err) {
          console.log('[ ] IBM MobileFirst pinTrustedCertificatePublicKey (string)');
      }
      try {
          // Bypass IBM MobileFirst {2}
          const WLClient_Activity_2 = Java.use('com.worklight.wlclient.api.WLClient');
          WLClient_Activity_2.getInstance().pinTrustedCertificatePublicKey.overload('[Ljava.lang.String;').implementation = function (cert) {
              console.log('  --> Bypassing IBM MobileFirst pinTrustedCertificatePublicKey (string array): ' + cert);
              return;
          };
          console.log('[+] IBM MobileFirst pinTrustedCertificatePublicKey (string array)');
      } catch (err) {
          console.log('[ ] IBM MobileFirst pinTrustedCertificatePublicKey (string array)');
      }

      // IBM WorkLight (ancestor of MobileFirst) HostNameVerifierWithCertificatePinning (quadruple bypass)
      try {
          // Bypass IBM WorkLight {1}
          const worklight_Activity_1 = Java.use('com.worklight.wlclient.certificatepinning.HostNameVerifierWithCertificatePinning');
          worklight_Activity_1.verify.overload('java.lang.String', 'javax.net.ssl.SSLSocket').implementation = function (a, b) {
              console.log('  --> Bypassing IBM WorkLight HostNameVerifierWithCertificatePinning (SSLSocket): ' + a);
              return;
          };
          console.log('[+] IBM WorkLight HostNameVerifierWithCertificatePinning (SSLSocket)');
      } catch (err) {
          console.log('[ ] IBM WorkLight HostNameVerifierWithCertificatePinning (SSLSocket)');
      }
      try {
          // Bypass IBM WorkLight {2}
          const worklight_Activity_2 = Java.use('com.worklight.wlclient.certificatepinning.HostNameVerifierWithCertificatePinning');
          worklight_Activity_2.verify.overload('java.lang.String', 'java.security.cert.X509Certificate').implementation = function (a, b) {
              console.log('  --> Bypassing IBM WorkLight HostNameVerifierWithCertificatePinning (cert): ' + a);
              return;
          };
          console.log('[+] IBM WorkLight HostNameVerifierWithCertificatePinning (cert)');
      } catch (err) {
          console.log('[ ] IBM WorkLight HostNameVerifierWithCertificatePinning (cert)');
      }
      try {
          // Bypass IBM WorkLight {3}
          const worklight_Activity_3 = Java.use('com.worklight.wlclient.certificatepinning.HostNameVerifierWithCertificatePinning');
          worklight_Activity_3.verify.overload('java.lang.String', '[Ljava.lang.String;', '[Ljava.lang.String;').implementation = function (a, b) {
              console.log('  --> Bypassing IBM WorkLight HostNameVerifierWithCertificatePinning (string string): ' + a);
              return;
          };
          console.log('[+] IBM WorkLight HostNameVerifierWithCertificatePinning (string string)');
      } catch (err) {
          console.log('[ ] IBM WorkLight HostNameVerifierWithCertificatePinning (string string)');
      }
      try {
          // Bypass IBM WorkLight {4}
          const worklight_Activity_4 = Java.use('com.worklight.wlclient.certificatepinning.HostNameVerifierWithCertificatePinning');
          worklight_Activity_4.verify.overload('java.lang.String', 'javax.net.ssl.SSLSession').implementation = function (a, b) {
              console.log('  --> Bypassing IBM WorkLight HostNameVerifierWithCertificatePinning (SSLSession): ' + a);
              return true;
          };
          console.log('[+] IBM WorkLight HostNameVerifierWithCertificatePinning (SSLSession)');
      } catch (err) {
          console.log('[ ] IBM WorkLight HostNameVerifierWithCertificatePinning (SSLSession)');
      }

      // Conscrypt CertPinManager
      try {
          const conscrypt_CertPinManager_Activity = Java.use('com.android.org.conscrypt.CertPinManager');
          conscrypt_CertPinManager_Activity.isChainValid.overload('java.lang.String', 'java.util.List').implementation = function (a, b) {
              console.log('  --> Bypassing Conscrypt CertPinManager: ' + a);
              return true;
          };
          console.log('[+] Conscrypt CertPinManager');
      } catch (err) {
          console.log('[ ] Conscrypt CertPinManager');
      }

      // CWAC-Netsecurity (unofficial back-port pinner for Android<4.2) CertPinManager
      try {
          const cwac_CertPinManager_Activity = Java.use('com.commonsware.cwac.netsecurity.conscrypt.CertPinManager');
          cwac_CertPinManager_Activity.isChainValid.overload('java.lang.String', 'java.util.List').implementation = function (a, b) {
              console.log('  --> Bypassing CWAC-Netsecurity CertPinManager: ' + a);
              return true;
          };
          console.log('[+] CWAC-Netsecurity CertPinManager');
      } catch (err) {
          console.log('[ ] CWAC-Netsecurity CertPinManager');
      }

      // Worklight Androidgap WLCertificatePinningPlugin
      try {
          const androidgap_WLCertificatePinningPlugin_Activity = Java.use('com.worklight.androidgap.plugin.WLCertificatePinningPlugin');
          androidgap_WLCertificatePinningPlugin_Activity.execute.overload('java.lang.String', 'org.json.JSONArray', 'org.apache.cordova.CallbackContext').implementation = function (a, b, c) {
              console.log('  --> Bypassing Worklight Androidgap WLCertificatePinningPlugin: ' + a);
              return true;
          };
          console.log('[+] Worklight Androidgap WLCertificatePinningPlugin');
      } catch (err) {
          console.log('[ ] Worklight Androidgap WLCertificatePinningPlugin');
      }

      // Netty FingerprintTrustManagerFactory
      try {
          const netty_FingerprintTrustManagerFactory = Java.use('io.netty.handler.ssl.util.FingerprintTrustManagerFactory');
          netty_FingerprintTrustManagerFactory.checkTrusted.implementation = function (type, chain) {
              console.log('  --> Bypassing Netty FingerprintTrustManagerFactory');
          };
          console.log('[+] Netty FingerprintTrustManagerFactory');
      } catch (err) {
          console.log('[ ] Netty FingerprintTrustManagerFactory');
      }

      // Squareup CertificatePinner [OkHTTP<v3] (double bypass)
      try {
          // Bypass Squareup CertificatePinner {1}
          const Squareup_CertificatePinner_Activity_1 = Java.use('com.squareup.okhttp.CertificatePinner');
          Squareup_CertificatePinner_Activity_1.check.overload('java.lang.String', 'java.security.cert.Certificate').implementation = function (a, b) {
              console.log('  --> Bypassing Squareup CertificatePinner (cert): ' + a);
              return;
          };
          console.log('[+] Squareup CertificatePinner (cert)');
      } catch (err) {
          console.log('[ ] Squareup CertificatePinner (cert)');
      }
      try {
          // Bypass Squareup CertificatePinner {2}
          const Squareup_CertificatePinner_Activity_2 = Java.use('com.squareup.okhttp.CertificatePinner');
          Squareup_CertificatePinner_Activity_2.check.overload('java.lang.String', 'java.util.List').implementation = function (a, b) {
              console.log('  --> Bypassing Squareup CertificatePinner (list): ' + a);
              return;
          };
          console.log('[+] Squareup CertificatePinner (list)');
      } catch (err) {
          console.log('[ ] Squareup CertificatePinner (list)');
      }

      // Squareup OkHostnameVerifier [OkHTTP v3] (double bypass)
      try {
          // Bypass Squareup OkHostnameVerifier {1}
          const Squareup_OkHostnameVerifier_Activity_1 = Java.use('com.squareup.okhttp.internal.tls.OkHostnameVerifier');
          Squareup_OkHostnameVerifier_Activity_1.verify.overload('java.lang.String', 'java.security.cert.X509Certificate').implementation = function (a, b) {
              console.log('  --> Bypassing Squareup OkHostnameVerifier (cert): ' + a);
              return true;
          };
          console.log('[+] Squareup OkHostnameVerifier (cert)');
      } catch (err) {
          console.log('[ ] Squareup OkHostnameVerifier (cert)');
      }
      try {
          // Bypass Squareup OkHostnameVerifier {2}
          const Squareup_OkHostnameVerifier_Activity_2 = Java.use('com.squareup.okhttp.internal.tls.OkHostnameVerifier');
          Squareup_OkHostnameVerifier_Activity_2.verify.overload('java.lang.String', 'javax.net.ssl.SSLSession').implementation = function (a, b) {
              console.log('  --> Bypassing Squareup OkHostnameVerifier (SSLSession): ' + a);
              return true;
          };
          console.log('[+] Squareup OkHostnameVerifier (SSLSession)');
      } catch (err) {
          console.log('[ ] Squareup OkHostnameVerifier (SSLSession)');
      }

      // Android WebViewClient (double bypass)
      try {
          // Bypass WebViewClient {1} (deprecated from Android 6)
          const AndroidWebViewClient_Activity_1 = Java.use('android.webkit.WebViewClient');
          AndroidWebViewClient_Activity_1.onReceivedSslError.overload('android.webkit.WebView', 'android.webkit.SslErrorHandler', 'android.net.http.SslError').implementation = function (obj1, obj2, obj3) {
              console.log('  --> Bypassing Android WebViewClient (SslErrorHandler)');
          };
          console.log('[+] Android WebViewClient (SslErrorHandler)');
      } catch (err) {
          console.log('[ ] Android WebViewClient (SslErrorHandler)');
      }
      try {
          // Bypass WebViewClient {2}
          const AndroidWebViewClient_Activity_2 = Java.use('android.webkit.WebViewClient');
          AndroidWebViewClient_Activity_2.onReceivedSslError.overload('android.webkit.WebView', 'android.webkit.WebResourceRequest', 'android.webkit.WebResourceError').implementation = function (obj1, obj2, obj3) {
              console.log('  --> Bypassing Android WebViewClient (WebResourceError)');
          };
          console.log('[+] Android WebViewClient (WebResourceError)');
      } catch (err) {
          console.log('[ ] Android WebViewClient (WebResourceError)');
      }

      // Apache Cordova WebViewClient
      try {
          const CordovaWebViewClient_Activity = Java.use('org.apache.cordova.CordovaWebViewClient');
          CordovaWebViewClient_Activity.onReceivedSslError.overload('android.webkit.WebView', 'android.webkit.SslErrorHandler', 'android.net.http.SslError').implementation = function (obj1, obj2, obj3) {
              console.log('  --> Bypassing Apache Cordova WebViewClient');
              obj3.proceed();
          };
      } catch (err) {
          console.log('[ ] Apache Cordova WebViewClient');
      }

      // Boye AbstractVerifier
      try {
          const boye_AbstractVerifier = Java.use('ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier');
          boye_AbstractVerifier.verify.implementation = function (host, ssl) {
              console.log('  --> Bypassing Boye AbstractVerifier: ' + host);
          };
      } catch (err) {
          console.log('[ ] Boye AbstractVerifier');
      }

      console.log("Unpinning setup completed");
      console.log("---");
  });

  /**

A Frida script that disables Flutter's TLS verification

This script works on Android x86, Android x64 and iOS x64. It uses pattern matching to find [ssl_verify_peer_cert in handshake.cc](https://github.com/google/boringssl/blob/master/ssl/handshake.cc#L323)

If the script doesn't work, take a look at https://github.com/NVISOsecurity/disable-flutter-tls-verification#warning-what-if-this-script-doesnt-work 


*/

var config = {
    "ios":{
        "modulename": "Flutter",
        "patterns":{
            "arm64": [
                "FF 83 01 D1 FA 67 01 A9 F8 5F 02 A9 F6 57 03 A9 F4 4F 04 A9 FD 7B 05 A9 FD 43 01 91 F? 03 00 AA ?? 0? 40 F9 ?8 1? 40 F9 15 ?? 4? F9 B5 00 00 B4",
            ],
        },
    },
    "android":{
        "modulename": "libflutter.so",
        "patterns":{
            "arm64": [
                "F? 0F 1C F8 F? 5? 01 A9 F? 5? 02 A9 F? ?? 03 A9 ?? ?? ?? ?? 68 1A 40 F9",
                "F? 43 01 D1 FE 67 01 A9 F8 5F 02 A9 F6 57 03 A9 F4 4F 04 A9 13 00 40 F9 F4 03 00 AA 68 1A 40 F9",
                "FF 43 01 D1 FE 67 01 A9 ?? ?? 06 94 ?? 7? 06 94 68 1A 40 F9 15 15 41 F9 B5 00 00 B4 B6 4A 40 F9",
            ],
            "arm": [
                "2D E9 F? 4? D0 F8 00 80 81 46 D8 F8 18 00 D0 F8 ??",
            ],
            "x64": [
                "55 41 57 41 56 41 55 41 54 53 50 49 89 f? 4c 8b 37 49 8b 46 30 4c 8b a? ?? 0? 00 00 4d 85 e? 74 1? 4d 8b",
                "55 41 57 41 56 41 55 41 54 53 48 83 EC 18 49 89 FF 48 8B 1F 48 8B 43 30 4C 8B A0 28 02 00 00 4D 85 E4 74"
            ]
        }
    }
  };

var TLSValidationDisabled = false;
if (Java.available) {
  console.log("[+] Java environment detected");
  Java.perform(hookSystemLoadLibrary);
} else if (ObjC.available) {
  console.log("[+] iOS environment detected");
}
disableTLSValidation();
setTimeout(disableTLSValidation, 2000, true);

function hookSystemLoadLibrary() {
  const System = Java.use('java.lang.System');
  const Runtime = Java.use('java.lang.Runtime');
  const SystemLoad_2 = System.loadLibrary.overload('java.lang.String');
  const VMStack = Java.use('dalvik.system.VMStack');

  SystemLoad_2.implementation = function(library) {
      try {
          const loaded = Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), library);
          if (library === 'flutter') {
              console.log("[+] libflutter.so loaded");
              disableTLSValidation();
          }
          return loaded;
      } catch (ex) {
          console.log(ex);
      }
  };
}

function disableTLSValidation(fallback=false) {
  if (TLSValidationDisabled) return;

  var platformConfig = config[Java.available ? "android" : "ios"];
  var m = Process.findModuleByName(platformConfig["modulename"]);

  // If there is no loaded Flutter module, the setTimeout may trigger a second time, but after that we give up
  if (m === null) {
      if (fallback) console.log("[!] Flutter module not found.");
      return;
  }

  if (Process.arch in platformConfig["patterns"])
  {
      findAndPatch(m, platformConfig["patterns"][Process.arch], Java.available && Process.arch == "arm" ? 1 : 0, fallback);
  }
  else
  {
      console.log("[!] Processor architecture not supported: ", Process.arch);
  }

  if (!TLSValidationDisabled)
  {
      if (fallback){
          if(m.enumerateRanges('r-x').length == 0)
          {
              console.log('[!] No memory ranges found in Flutter library. This is either a Frida bug, or the application is using some kind of RASP.');
          }
          else
          {
              console.log('[!] ssl_verify_peer_cert not found. Please open an issue at https://github.com/NVISOsecurity/disable-flutter-tls-verification/issues');
          }
      }
      else
      {
          console.log('[!] ssl_verify_peer_cert not found. Trying again...');
      }
  }
}

function findAndPatch(m, patterns, thumb, fallback) {
  console.log("[+] Flutter library found");
  var ranges = m.enumerateRanges('r-x');
  ranges.forEach(range => {
      patterns.forEach(pattern => {
          Memory.scan(range.base, range.size, pattern, {
              onMatch: function(address, size) {
                  console.log('[+] ssl_verify_peer_cert found at offset: 0x' + (address - m.base).toString(16));
                  TLSValidationDisabled = true;
                  hook_ssl_verify_peer_cert(address.add(thumb));
              }
          });
      });
  });
}

function hook_ssl_verify_peer_cert(address) {
  Interceptor.replace(address, new NativeCallback((pathPtr, flags) => {
      return 0;
  }, 'int', ['pointer', 'int']));
}

}, 0);