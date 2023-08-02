// const axios = require('axios');
// const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NzczOTk1Ny0yYTQxLTQ3N2YtODI3NC02YWRhMWRjNDI3NjEiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiJjMWEwNGFkMC01YzcwLTRhNzAtODUwZC0yZjQ3MzJkODViYjIiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODc0NDY4OTR9.KHqyjRIPYNsHm0mf9wlam4n3Qw_UBuRtwuNRSBhthdN2uYGSdUKemn8lQ50GAgqmq_4D_F1cPcaYJMobzw-J6kNxOLycZll5tVPLJBin2m9FElm9HXuUoVGzCSB7syD3cJZgWtihgq6YGpwmkjr4p-hRoFuGIIF4mHZejSHSPXk-RqF6DRlzzlwufcjT9F586tfwAw_8o7XOs3-4Y46usup8b6G5Kj5ced27Y46yPMHpUc1mXG5dSZGkfchwjugfMiv0Cv-xp1IdduEumq52w1MMypmoRHLN033JAUGoVJWlxKRCj_SKrIkfRVuUkPrjZ83jCmC2zmIC6Uy1Yw23og'

// const productId = [
//   "5030395-EA-000",
//   "5030393-EA-000",
//   "5269093-EA-000",
//   "5269797-EA-000",
//   "5283849-EA-000",
//   "5283852-EA-000",
//   "5006716-EA-000"
// ]


// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: `https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/store/d48eba45-0c1c-4f5d-b836-0ed54b45c99c/product/${productId}`,
//   headers: { 
//     'accept': 'application/json, text/plain, */*', 
//     'authorization': `Bearer ${token}`, 
//     'user-agent': 'NewWorldApp/4.6.0 (Android 12)'
//   }
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });


// const axios = require('axios');
// const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NzczOTk1Ny0yYTQxLTQ3N2YtODI3NC02YWRhMWRjNDI3NjEiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiJjMWEwNGFkMC01YzcwLTRhNzAtODUwZC0yZjQ3MzJkODViYjIiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODc0NDY4OTR9.KHqyjRIPYNsHm0mf9wlam4n3Qw_UBuRtwuNRSBhthdN2uYGSdUKemn8lQ50GAgqmq_4D_F1cPcaYJMobzw-J6kNxOLycZll5tVPLJBin2m9FElm9HXuUoVGzCSB7syD3cJZgWtihgq6YGpwmkjr4p-hRoFuGIIF4mHZejSHSPXk-RqF6DRlzzlwufcjT9F586tfwAw_8o7XOs3-4Y46usup8b6G5Kj5ced27Y46yPMHpUc1mXG5dSZGkfchwjugfMiv0Cv-xp1IdduEumq52w1MMypmoRHLN033JAUGoVJWlxKRCj_SKrIkfRVuUkPrjZ83jCmC2zmIC6Uy1Yw23og';

// const productId = [
//   "5030395-EA-000",
//   "5030393-EA-000",
//   "5269093-EA-000",
//   "5269797-EA-000",
//   "5283849-EA-000",
//   "5283852-EA-000",
//   "5006716-EA-000"
// ];

// productId.forEach((id) => {
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/store/d48eba45-0c1c-4f5d-b836-0ed54b45c99c/product/${id}`,
//     headers: { 
//       'accept': 'application/json, text/plain, */*', 
//       'authorization': `Bearer ${token}`, 
//       'user-agent': 'NewWorldApp/4.6.0 (Android 12)'
//     }
//   };

//   axios.request(config)
//     .then((response) => {
//       console.log(`${id} ${response.status === 200}`);
//     })
//     .catch((error) => {
//       console.log(`${id} false`);
//     });
// });

// const axios = require('axios');
// const fs = require('fs');
// const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NzczOTk1Ny0yYTQxLTQ3N2YtODI3NC02YWRhMWRjNDI3NjEiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiJjMWEwNGFkMC01YzcwLTRhNzAtODUwZC0yZjQ3MzJkODViYjIiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODc0NDY4OTR9.KHqyjRIPYNsHm0mf9wlam4n3Qw_UBuRtwuNRSBhthdN2uYGSdUKemn8lQ50GAgqmq_4D_F1cPcaYJMobzw-J6kNxOLycZll5tVPLJBin2m9FElm9HXuUoVGzCSB7syD3cJZgWtihgq6YGpwmkjr4p-hRoFuGIIF4mHZejSHSPXk-RqF6DRlzzlwufcjT9F586tfwAw_8o7XOs3-4Y46usup8b6G5Kj5ced27Y46yPMHpUc1mXG5dSZGkfchwjugfMiv0Cv-xp1IdduEumq52w1MMypmoRHLN033JAUGoVJWlxKRCj_SKrIkfRVuUkPrjZ83jCmC2zmIC6Uy1Yw23og';

// const productId = [ "5030392-EA-000",
// "5030394-EA-000",
// "5030395-EA-000",
// "5030393-EA-000",
// "5269093-EA-000",
// "5269797-EA-000",
// "5283849-EA-000",
// "5283852-EA-000",
// "5006716-EA-000",
// "5264189-EA-000",
// "5314403-EA-000",
// "5313493-EA-000",
// "5313492-EA-000",
// "5313491-EA-000",
// "5313490-EA-000",
// "5313229-EA-000",
// "5313226-EA-000",
// "5312803-EA-000",
// "5312797-EA-000",
// "5312796-EA-000",
// "5312795-EA-000",
// "5312793-EA-000",
// "5312792-EA-000",
// "5312791-EA-000",
// "5312779-EA-000",
// "5312778-EA-000",
// "5312777-EA-000",
// "5312751-EA-000",
// "5312750-EA-000",
// "5312749-EA-000",
// "5311233-EA-000",
// "5311232-EA-000",
// "5307657-EA-000",
// "5307654-EA-000",
// "5299541-EA-000",
// "5299540-EA-000",
// "5299528-EA-000",
// "5299527-EA-000",
// "5299502-EA-000",
// "5290395-EA-000",
// "5290246-EA-000",
// "5290245-EA-000",
// "5289712-EA-000",
// "5289711-EA-000",
// "5023039-EA-000"];

// const results = [];

// productId.forEach((id) => {
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: `https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/store/d48eba45-0c1c-4f5d-b836-0ed54b45c99c/product/${id}`,
//     headers: { 
//       'accept': 'application/json, text/plain, */*',
//       'authorization': `Bearer ${token}`,
//       'user-agent': 'NewWorldApp/4.6.0 (Android 12)'
//     }
//   };

//   axios.request(config)
//     .then((response) => {
//       results.push({ id, success: response.status === 200 });
//       if (results.length === productId.length) {
//         // Все запросы выполнены, сохраняем результаты в файл
//         saveResultsToFile(results);
//       }
//     })
//     .catch((error) => {
//       results.push({ id, success: false });
//       if (results.length === productId.length) {
//         // Все запросы выполнены, сохраняем результаты в файл
//         saveResultsToFile(results);
//       }
//     });
// });

// function saveResultsToFile(results) {
//   const fileName = 'results.txt';
//   let content = '';
//   results.forEach((result) => {
//     content += `${result.id} ${result.success}\n`;
//   });

//   fs.writeFile(fileName, content, (error) => {
//     if (error) {
//       console.log('Ошибка при сохранении файла:', error);
//     } else {
//       console.log('Результаты сохранены в файл:', fileName);
//     }
//   });
// }

const axios = require('axios');
const token = 'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI4Y2M3MTIxYy0xM2FmLTRlNGUtYWUwYS02YTMyMzhkM2ZjYmUiLCJpc3MiOiJvbmxpbmUtY3VzdG9tZXIiLCJzZXNzaW9uSWQiOiI3ZmZhZGFkOC1jNjdmLTQ2NDMtYmU1Mi00MGVhYjU5ZDU4NjMiLCJiYW5uZXIiOiJNTlciLCJmaXJzdE5hbWUiOiJhbm9ueW1vdXMiLCJlbWFpbCI6ImFub255bW91cyIsInJvbGVzIjpbIkFOT05ZTU9VUyJdLCJleHAiOjE2ODc0NDk4OTN9.EVGSwG3SMTgn8NpEEp7DCJH8bx3WeiueRLkFIxreOEFYGuq9vsa3D8M2Uws2mUja6VMQuCEk9Y4A0ctTH2Rx-7mi6qdNCsCLTabz6Pa75o9Lg8Lab5AO2daNwOdJtcQL7b09En-LLETEpfeh8vo7By6vjHB4ZduCSInsVKyD_vLLHgl-bpAi2dGuun6pVvc0V-7zux_PZkxlYEubg4P4PbFVSHb040mt1Hpx196jpI8meOxcyzB4i_i8Sri2rJ5kRTZfPeASe2gN0iMeaaloLDDKWRs0ZbbPJe28AApObEzhSYifqZiPeataZt812LXlKXeCamZUr9pE8nkBfssT_Q';

const productId = [
  "5030392-EA-000",
  "5030394-EA-000",
  "5030395-EA-000",
  "5030393-EA-000",
  "5269093-EA-000",
  "5269797-EA-000",
  "5283849-EA-000",
  "5283852-EA-000",
  "5006716-EA-000",
  "5264189-EA-000",
  "5314403-EA-000",
  "5313493-EA-000",
  "5313492-EA-000",
  "5313491-EA-000",
  "5313490-EA-000",
  "5313229-EA-000",
  "5313226-EA-000",
  "5312803-EA-000",
  "5312797-EA-000",
  "5312796-EA-000",
  "5312795-EA-000",
  "5312793-EA-000",
  "5312792-EA-000",
  "5312791-EA-000",
  "5312779-EA-000",
  "5312778-EA-000",
  "5312777-EA-000",
  "5312751-EA-000",
  "5312750-EA-000",
  "5312749-EA-000",
  "5311233-EA-000",
  "5311232-EA-000",
  "5307657-EA-000",
  "5307654-EA-000",
  "5299541-EA-000",
  "5299540-EA-000",
  "5299528-EA-000",
  "5299527-EA-000",
  "5299502-EA-000",
  "5290395-EA-000",
  "5290246-EA-000",
  "5290245-EA-000",
  "5289712-EA-000",
  "5289711-EA-000",
  "5023039-EA-000"
];

const results = [];

productId.forEach((id) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api-prod.prod.fsniwaikato.kiwi/prod/mobile/store/d48eba45-0c1c-4f5d-b836-0ed54b45c99c/product/${id}`,
    headers: { 
      'accept': 'application/json, text/plain, */*',
      'authorization': `Bearer ${token}`,
      'user-agent': 'NewWorldApp/4.6.0 (Android 12)'
    }
  };

  axios.request(config)
    .then((response) => {
      if (response.status !== 200) {
        results.push({ id, success: false });
      }

      if (results.length === productId.length) {
        // Все запросы выполнены, выводим результаты в консоль
        displayResults(results);
      }
    })
    .catch((error) => {
      results.push({ id, success: false });

      if (results.length === productId.length) {
        // Все запросы выполнены, выводим результаты в консоль
        displayResults(results);
      }
    });
});

function displayResults(results) {
  results.forEach((result) => {
    console.log(`${result.id} ${result.success}`);
  });
}
