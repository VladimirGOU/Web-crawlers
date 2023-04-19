var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://ecom-mgo-ecom.e-magnum.kz/auth/server/api/v1/security/guest/login',
  headers: { 
    "accept": "application/json"
  }
};

axios(config)
.then(function (response) {
  const tokenResponse =  response.data.token
  console.log(tokenResponse);
});
