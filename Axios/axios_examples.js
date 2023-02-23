const axios = require('axios').default;

// axios.get('https://api.astronauts.id/api/product/4727/location/0')
//     .then(function(response){
//      console.log('THIS IS MY RESPONSE', response);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .then(function(){
//     });



// async function getUser() {
//     try {
//       const response = await axios.get('https://api.astronauts.id/api/product/4727/location/0');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getUser()



// const endpoint = "https://www.sayurbox.com/graphql/v1";
// const headers = {
//     "accept": "*/*",
//     "aauthorization" : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4NDY2MjEyMTQxMjQ4NzUxOWJiZjhlYWQ4ZGZiYjM3ODYwMjk5ZDciLCJ0eXAiOiJKV1QifQ.eyJhbm9ueW1vdXMiOnRydWUsImF1ZCI6InNheXVyYm94LWF1ZGllbmNlIiwiYXV0aF90aW1lIjoxNjc1Njk2NTE5LCJleHAiOjE2NzgyODg1MTksImlhdCI6MTY3NTY5NjUxOSwiaXNzIjoiaHR0cHM6Ly93d3cuc2F5dXJib3guY29tIiwibWV0YWRhdGEiOnsiZGV2aWNlX2luZm8iOm51bGwsInRlbmFudCI6ImIyYyJ9LCJuYW1lIjpudWxsLCJwaWN0dXJlIjpudWxsLCJwcm92aWRlcl9pZCI6ImFub255bW91cyIsInNpZCI6IjU2NTFlNDViLWQ2NDQtNGFhYi1hYjQ5LTlkNzBlN2YxOWQ0ZSIsInN1YiI6IndYaFd4OVdlU0tTZU9Cd0hCWDhHLUgtbGw3LUsiLCJ1c2VyX2lkIjoid1hoV3g5V2VTS1NlT0J3SEJYOEctSC1sbDctSyJ9.G2mzJ2mzRIfay0rFmjQCNwQxCmd0oFHurGtSYiNrJi7th1dYGzkz6zlfinWJ813ngtdsugc4EuJ6gx6EFP5uShTJyLC79cq0jw5WPLLxF9xB9D5czInU3Yy0Vp1oosLpIrO7QmLDvkGzMqGKK2-GIlnYcy2f1rMTnFriWsZtr7m4jcdM_f0MOXjTkgKi2MT78cywEjY_zrC25V5Xto2XtHHJ5gck8v-1THGnCjfcRzGqrE9rspOoTpsy2Q3gMkCZA-_MetcvniQI9uX8GmiABxH_VCuAk5SKs5vW5hhp5n39W9-BFTDWrbXCWegiiEoMivWWf44srOIzXt8GYr4S7A",
//     "content-type": "application/json",
//     "x-device-info": `{"platform":"android","is_app":true,"is_mobile":true,"device_id":"d6c27046d68068fc","brand":"google","model":"sdk_gphone64_x86_64","pixel_density":2.75,"client_ip":"0.0.0.0","os_name":"","os_version":"12"}`,
//     "x-binary-version": "2.7.3",
//     "user-agent": "okhttp/5.0.0-alpha.10",
// }
// const graphqlQuery = {
//     "operationName": "getProducts",
//     "query": `query getProducts($deliveryConfigId: ID!, $sortBy: CatalogueSortType!, $slug: String!, $after: String, $first: Int, $isInstantDelivery: Boolean, $abTestFeatures: [String!]) {\n  productsByCategoryOrSubcategoryAndDeliveryConfig(\n    deliveryConfigId: $deliveryConfigId\n    sortBy: $sortBy\n    slug: $slug\n    after: $after\n    first: $first\n    isInstantDelivery: $isInstantDelivery\n    abTestFeatures: $abTestFeatures\n  ) {\n    edges {\n      node {\n        ...ProductInfoFragment\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n      __typename\n    }\n    productBuilder\n    __typename\n  }\n}\n\nfragment ProductInfoFragment on Product {\n  id\n  uuid\n  deliveryConfigId\n  displayName\n  priceRanges\n  priceMin\n  priceMax\n  actualPriceMin\n  actualPriceMax\n  slug\n  label\n  isInstant\n  isInstantOnly\n  nextDayAvailability\n  heroImage\n  promo\n  discount\n  isDiscount\n  variantType\n  imageIds\n  isStockAvailable\n  defaultVariantSkuCode\n  quantitySoldFormatted\n  promotion {\n    quota\n    isShown\n    campaignId\n    __typename\n  }\n  productVariants {\n    productVariant {\n      id\n      skuCode\n      variantName\n      maxQty\n      isDiscount\n      stockAvailable\n      promotion {\n        quota\n        campaignId\n        isShown\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      __typename\n    }\n    __typename\n  }\n  __typename\n}`,
//     "variables": {
//         "deliveryConfigId":"RGVsaXZlcnlDb25maWc6VHVlc2RheSwgMDcgRmVicnVhcnkgMjAyM3xKSzAxfFNEMjl8ZmFsc2U=",
//         "sortBy":"related_product",
// 		"isInstantDelivery":false,
// 		"slug":"vegetables-1-a0d03d59",
// 	    "first":12,
// 		"abTestFeatures":[],
// 		"after":"YXJyYXljb25uZWN0aW9uOjEx",
//     }
// };

// const response = axios({
//     url: endpoint,
//     method: 'post',
//     headers: headers,
//     data: graphqlQuery
//   });
  
//   console.log(response.data);
//   console.log(response.errors);




// var axios = require('axios');
var data = JSON.stringify([
  {
    "operationName": "getProducts",
    "variables": {
      "deliveryConfigId": "RGVsaXZlcnlDb25maWc6VHVlc2RheSwgMDcgRmVicnVhcnkgMjAyM3xKSzAxfFNEMjl8ZmFsc2U=",
      "sortBy": "related_product",
      "isInstantDelivery": false,
      "slug": "vegetables-1-a0d03d59",
      "first": 12,
      "abTestFeatures": [],
      "after": "YXJyYXljb25uZWN0aW9uOjEx"
    },
    "query": "query getProducts($deliveryConfigId: ID!, $sortBy: CatalogueSortType!, $slug: String!, $after: String, $first: Int, $isInstantDelivery: Boolean, $abTestFeatures: [String!]) {\n  productsByCategoryOrSubcategoryAndDeliveryConfig(\n    deliveryConfigId: $deliveryConfigId\n    sortBy: $sortBy\n    slug: $slug\n    after: $after\n    first: $first\n    isInstantDelivery: $isInstantDelivery\n    abTestFeatures: $abTestFeatures\n  ) {\n    edges {\n      node {\n        ...ProductInfoFragment\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n      __typename\n    }\n    productBuilder\n    __typename\n  }\n}\n\nfragment ProductInfoFragment on Product {\n  id\n  uuid\n  deliveryConfigId\n  displayName\n  priceRanges\n  priceMin\n  priceMax\n  actualPriceMin\n  actualPriceMax\n  slug\n  label\n  isInstant\n  isInstantOnly\n  nextDayAvailability\n  heroImage\n  promo\n  discount\n  isDiscount\n  variantType\n  imageIds\n  isStockAvailable\n  defaultVariantSkuCode\n  quantitySoldFormatted\n  promotion {\n    quota\n    isShown\n    campaignId\n    __typename\n  }\n  productVariants {\n    productVariant {\n      id\n      skuCode\n      variantName\n      maxQty\n      isDiscount\n      stockAvailable\n      promotion {\n        quota\n        campaignId\n        isShown\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasPreviousPage\n      hasNextPage\n      __typename\n    }\n    __typename\n  }\n  __typename\n}"
  }
]);

var config = {
  method: 'post',
  url: 'https://www.sayurbox.com/graphql/v1',
  headers: { 
    'authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY4NDY2MjEyMTQxMjQ4NzUxOWJiZjhlYWQ4ZGZiYjM3ODYwMjk5ZDciLCJ0eXAiOiJKV1QifQ.eyJhbm9ueW1vdXMiOnRydWUsImF1ZCI6InNheXVyYm94LWF1ZGllbmNlIiwiYXV0aF90aW1lIjoxNjc1Njk2NTE5LCJleHAiOjE2NzgyODg1MTksImlhdCI6MTY3NTY5NjUxOSwiaXNzIjoiaHR0cHM6Ly93d3cuc2F5dXJib3guY29tIiwibWV0YWRhdGEiOnsiZGV2aWNlX2luZm8iOm51bGwsInRlbmFudCI6ImIyYyJ9LCJuYW1lIjpudWxsLCJwaWN0dXJlIjpudWxsLCJwcm92aWRlcl9pZCI6ImFub255bW91cyIsInNpZCI6IjU2NTFlNDViLWQ2NDQtNGFhYi1hYjQ5LTlkNzBlN2YxOWQ0ZSIsInN1YiI6IndYaFd4OVdlU0tTZU9Cd0hCWDhHLUgtbGw3LUsiLCJ1c2VyX2lkIjoid1hoV3g5V2VTS1NlT0J3SEJYOEctSC1sbDctSyJ9.G2mzJ2mzRIfay0rFmjQCNwQxCmd0oFHurGtSYiNrJi7th1dYGzkz6zlfinWJ813ngtdsugc4EuJ6gx6EFP5uShTJyLC79cq0jw5WPLLxF9xB9D5czInU3Yy0Vp1oosLpIrO7QmLDvkGzMqGKK2-GIlnYcy2f1rMTnFriWsZtr7m4jcdM_f0MOXjTkgKi2MT78cywEjY_zrC25V5Xto2XtHHJ5gck8v-1THGnCjfcRzGqrE9rspOoTpsy2Q3gMkCZA-_MetcvniQI9uX8GmiABxH_VCuAk5SKs5vW5hhp5n39W9-BFTDWrbXCWegiiEoMivWWf44srOIzXt8GYr4S7A', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});