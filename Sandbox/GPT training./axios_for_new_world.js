
// const axios = require('axios');
// const { response } = require('express');

// const url = 'https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/v1/product/search/MNW?sortOrder=popularity';
// const headers = {
//   'Accept': 'application/json, text/plain, */*',
//   'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmMjQyY2NhNi1hYzM3LTQwNTYtYjgzYS0zNGM3YmJlODJjZTQiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiI4MTY3MjRmZS1lNmVhLTQ4NTQtOWI2Ny03ZWZmMjMwOWU0MDQiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODUxMDgzODh9.UrrfdNL1A5GDkIJtnYttlRR5-9qCcQXUjutSTcqzAnFmatlv0xLNtbzGgop6tGvzr9wQg1q4qY1CSQZ7x_an62AXyHSBAc_tP55Xt_xXAmFZ36C0N2ZLrX5CXhQVcgirK3z9z40DltpIGR6LSRffxc_JKWNYWAni8ouys1CTw4UHMjvWBsvl_Z_KqUNfHROO1Bdj2F3-dLiAIqVABb2eiV9HbgOm0204UwLXL7_X8shrKKwMFfLP7xfLYkAoJUjK7bi15JBcj-SJWAP_99b5XoKmQFPrSrvXQhSXeKsBCFEmxsmD-87nsZOgvHl2QHC4CkdSEO_0DaIFlL2jgBIbIw',
//   'Content-Type': 'application/json',
//   'User-Agent': 'NewWorldApp/4.6.0 (Android 12)'
// };
// const data = {
//   query: 'bread',
//   facets: ['category2NI', 'brand', 'onPromotion', 'ni_marketinginitiatives', 'tobacco'],
//   attributesToHighlight: [],
//   sortFacetValuesBy: 'alpha',
//   maxValuesPerFacet: 1000,
//   hitsPerPage: 2,
//   facetFilters: ['stores:d48eba45-0c1c-4f5d-b836-0ed54b45c99c']
// };

// axios.post(url, data, { headers })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });


//   const categories = [];

//   response.hits.forEach(hit => {
//     categories.push(...hit.category2);
//   });
  
//   console.log(categories);









// const axios = require('axios');

// const url = 'https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/v1/product/search/MNW?sortOrder=popularity';
// const headers = {
//   'Accept': 'application/json, text/plain, */*',
//   'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiZTM5ZTYxZi0zYzVjLTQyMGItYjVkMS00NTM2OGJhNjI1ZGMiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiJhMzUwNDEzYi02N2U2LTRlZDctYjY1NS01ZjUwODI5MTgzNmYiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODUxMDYwNzF9.L4zf63xeb_4Bpy7zdTOmqCXil7XpvbNLm2DguQHQ2SPVteDmVmY0KmrkjqJu4evLEgPdPMl3_1uYTHuiPL3vm5TvqPSTkl2eIV9WMNAAl1iw7nvpgdZJbrlAlNi5Nhi8ozlxWyqqU0l8wuuybSSeimJISlsCJuJG354O_OEfxViA5D1uK2CaZ2xPrEPlk9Cv1iOgs39qus5tUJf6tBLpDJP3zHcNyWR4vFHxGvSIjHtvyh2m7QGzKsiZL5yX2p8aBx8KCU-axVO0_jNj2Dru7O8aI6bCpOVuU2UXyNQynXn2NYbGrTsUVKSlO4nS_RhK655It-uSlMf02a56tE67SA',
//   'Content-Type': 'application/json',
//   'User-Agent': 'NewWorldApp/4.6.0 (Android 12)'
// };
// const data = {
//   query: 'bread',
//   facets: ['category2NI', 'brand', 'onPromotion', 'ni_marketinginitiatives', 'tobacco'],
//   attributesToHighlight: [],
//   sortFacetValuesBy: 'alpha',
//   maxValuesPerFacet: 1000,
//   hitsPerPage: 100,
//   facetFilters: ['stores:d48eba45-0c1c-4f5d-b836-0ed54b45c99c']
// };

// axios.post(url, data, { headers })
//   .then(response => {
//     const category2Data = response.data.category2;
//     console.log(category2Data);
//   })
//   .catch(error => {
//     console.error(error);
//   });










// const axios = require('axios');
// const { response } = require('express');

// const url = 'https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/v1/product/search/MNW?sortOrder=popularity';
// const headers = {
//   'Accept': 'application/json, text/plain, */*',
//   'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzZmJmYzUxNC05YjI4LTQyMTEtODIwMC05MGJjZDcyZWNiYzYiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiI1ZDBkM2JkMC01MGE3LTRlZjItYWQxMC05ZTAzMDJjYzRhNzMiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODUxMTE5OTJ9.bFiYhmvEc7CGy6YqXd1qMNiqEfPCGUnlofW8xXolIBxE63HOUsVtmEsi4pddQkxFYBWqQMigfRpnIbRGhN8sN9x623FK0npteYCcMZ6FmgUeSwuYrHsrTb154FjKyOJ559beeKPm1XpUU7b_6VbEvVU5IzxodyM7EFqsL13Nfon7Zd1mnMxjpzzSTe_yedu306tPMyLi40f0zkVP3SXB-v8t5imyPS052C5_ywuqpw0_F56E9ddBk3w_y2wEGn6XdUO9aEpkRTL7XFFaf5X9f2SzIiCIQ6EqgDLyYWw0AvaMH9nyfSh9LM3R6Nbf43E4CMyMWj0R-Q4OXGxFoz9oXg',
//   'Content-Type': 'application/json',
//   'User-Agent': 'NewWorldApp/4.6.0 (Android 12)'
// };
// const data = {
//   query: 'beer nut',
//   facets: ['category2NI', 'brand', 'onPromotion', 'ni_marketinginitiatives', 'tobacco'],
//   attributesToHighlight: [],
//   sortFacetValuesBy: 'alpha',
//   maxValuesPerFacet: 1000,
//   hitsPerPage: 1000,
//   facetFilters: ['stores:d48eba45-0c1c-4f5d-b836-0ed54b45c99c']
// };

// axios.post(url, data, { headers })
//   .then(response => {
//     //console.log(response.data);

//     const categories = [];

//     response.data.hits.forEach(hit => {
//       categories.push(...hit.category2);
//     });

//     console.log(categories);
//   })
//   .catch(error => {
//     console.error(error);
//   });



const axios = require('axios');
const fs = require('fs');

const url = 'https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/v1/product/search/MNW?sortOrder=popularity';
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmMTc2MmZkYy1hNTJjLTRmN2YtYTU2NS03NWM0NGRjMmFmYmEiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiI0MGU1NmFjOS0wMWZiLTRmZGUtOGI3ZC1iOTRlZmM0ZWFmMWEiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODUxMTQwMjl9.Q_le-ehGhAZJeh6Gcmh9bXRD_pHPmXnXIzpMf4LnKdJRxpllzmQVx0kZGy54TxJ016OJ1VKCCnzXCjMpxDE7aksGqUs7kRLnrc2Y4WxSKenCcrcv0DsiMZcSKYhfDnBxL_t3-G6jeqBVGHksG4Ai_rYf930ldoFBz4gHyvh10lyofPUtlrdgQLQiuyLFrwXTLTnq6BKwH0ufdbNA_D3YVTJfeMJm2CVZou2IeggRE-a_y843_9MsqqgSwBsC487YrFPMxWRS1C7yMWHm2e7Tu0lvHqx8u6R72F2cBEmcNgymwbyNpYuDjaD42VrjrJGu9axzyGFzxy-JxFJvEhrpvw',
  'Content-Type': 'application/json',
  'User-Agent': 'NewWorldApp/4.6.0 (Android 12)'
};
const data = {
  query: 'beer nut',
  facets: ['category2NI', 'brand', 'onPromotion', 'ni_marketinginitiatives', 'tobacco'],
  attributesToHighlight: [],
  sortFacetValuesBy: 'alpha',
  maxValuesPerFacet: 1000,
  hitsPerPage: 1000,
  facetFilters: ['stores:d48eba45-0c1c-4f5d-b836-0ed54b45c99c']
};

axios.post(url, data, { headers })
  .then(response => {
    const categories = [];
    response.data.hits.forEach(hit => {
      categories.push(...hit.category1);
    });
    const result = categories.join('\n'); // Convert the array to a string with each category on a new line
    fs.writeFile('result.txt', result, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Result saved to file: result.txt');
      }
    });
  })
  .catch(error => {
    console.error(error);
  });
