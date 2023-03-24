var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://catalog.sixty60.co.za/api/v1/search/products/category?categoryId=63d8346bf0cbac537c0e1323&size=1024&storeIds=62dabd7f832d656087c747d8,62dabedd2aa38c342af94d53&userId=639ad9280ea03d7b550d7f37&includePromotions=true&isXtraSavingsMember=false&particularMemberBonusBuyIds&missionId=5fa3fa73c2a45293417f4957&promotionChannel=sixty60',
  headers: { 
    "accept": "application/json"
  }
};

axios(config)
.then(function (response) {
  console.log(response);
});
