// const axios = require('axios').default;
// axios.get('https://api.astronauts.id/api/product/4727/location/0')
//     .then(function(response){
//      console.log('THIS IS MY RESPONSE', response);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .then(function(){
        
//     });



async function getUser() {
    try {
      const response = await axios.get('https://api.astronauts.id/api/product/4727/location/0');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }