// var axios = require('axios');

// const requestBody = '{"query":"water","filters":"(\\"is_enabled\\":1) AND (\\"attributes.identifier\\":\\"display_in_store\\" AND \\"attributes.values.store_id\\":1228673 AND \\"attributes.values.value\\":1) AND (\\"inventory.store_id\\":1228673)","hitsPerPage":1000}';
// var config = {
//   method: 'post',
//   maxBodyLenght: Infinity,
//   url: 'https://ptbedxmc25-dsn.algolia.net/1/indexes/k2_products/query',
//   headers: { 
//     'Accept': 'application/json', 
//     'Accept-Charset': 'UTF-8', 
//     'Connection': 'Keep-Alive', 
//     'Content-Type': 'text/plain; charset=UTF-8', 
//     'Host': 'ptbedxmc25-dsn.algolia.net', 
//     'User-Agent': 'Algolia for Kotlin (1.12.0)', 
//     'X-Algolia-API-Key': '8458c3db90b0ec6355626829cc5790f5', 
//     'X-Algolia-Application-Id': 'PTBEDXMC25', 
//     'X-NewRelic-ID': 'VwUAUl5QDhAFXVVRBAEPUlQ='
//   },
// };

// axios(config)
// .then(function (response) {
//   console.log(response);
// });

const axios = require('axios');
let requestBodySearch = '{"query":"water","filters":"(\\"is_enabled\\":1) AND (\\"attributes.identifier\\":\\"display_in_store\\" AND \\"attributes.values.store_id\\":1228673 AND \\"attributes.values.value\\":1) AND (\\"inventory.store_id\\":1228673)","hitsPerPage":1000}';
let requestBodyCategory = '{\n  "requests": [\n    {\n      "indexName": "k2_products",\n      "params": "filters=(%22categories.category_id%22:2439+AND+%22is_enabled%22:1)+AND+(%22attributes.identifier%22:%22display_in_store%22+AND+%22attributes.values.store_id%22:1228673+AND+%22attributes.values.value%22:1)+AND+(%22inventory.store_id%22:1228673)&hitsPerPage=200"\n    }\n  ]\n}\n';

let config = {
  method: 'post',
  // maxBodyLength: Infinity,
  url: 'https://ptbedxmc25-dsn.algolia.net/1/indexes/*/queries',
  headers: { 
    'Accept': 'application/json', 
    'Accept-Charset': 'UTF-8', 
    'Connection': 'Keep-Alive', 
    'Content-Type': 'text/plain; charset=UTF-8', 
    'Host': 'ptbedxmc25-dsn.algolia.net', 
    'User-Agent': 'Algolia for Kotlin (1.12.0)', 
    'X-Algolia-API-Key': '8458c3db90b0ec6355626829cc5790f5', 
    'X-Algolia-Application-Id': 'PTBEDXMC25', 
    'X-NewRelic-ID': 'VwUAUl5QDhAFXVVRBAEPUlQ='
  },
  data : requestBodyCategory,
};

axios.request(config)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});