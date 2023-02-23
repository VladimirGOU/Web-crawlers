var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.blibli.com/backend/product-detail/products/ps--HYK-70004-02454/_summary',
  headers: { 
    'user-agent': 'BlibliAndroid/9.7.0(5087) 6da6ce79-088f-480b-ba02-bc5e615eb863 Dalvik/2.1.0 (Linux; U; Android 12; sdk_gphone64_x86_64 Build/SE1A.220826.005)', 
  }
};

axios(config)
.then(function (response) {
  console.log(response);
});
