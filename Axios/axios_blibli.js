var axios = require('axios');

// var configBlibliToken = {
//   method: 'post',
//   url: 'https://ecom-mgo-ecom.e-magnum.kz/auth/server/api/v1/security/guest/login',
//   headers: { 
//     "accept": "application/json"
//   }
// };

// axios(configBlibliToken)
// .then(function (response) {
//   const tokenResponse =  response.data.token
//   console.log(tokenResponse);
// });

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/user/login/guest',
  headers: { 
    'accept': 'application/json, text/plain, */*', 
    'content-type': 'application/json', 
    'user-agent': 'NewWorldApp/4.6.0 (Android 12)'
  }
};

axios.request(config)
.then((response) => {
  console.log(response.data.access_token);
})
.catch((error) => {
  console.log(error);
});
