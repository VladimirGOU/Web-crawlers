

const axios = require('axios');
const cheerio = require('cheerio');
async function getResponse() {
  const url = 'https://www.rossmann.de/de/baby-und-spielzeug-lego-76217-ich-bin-groot/p/5702017154602';
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log('Error:', error.message);
  }
}
getResponse().then(response => {
  const $ = cheerio.load(response.data);
  const title = $('.rm-product__title').text().trim();
  const priceInteger = $('.rm-price__integer').text().trim();
  const priceFloat = $('.rm-price__float').text().trim();

  console.log(title);
  console.log(priceInteger);
  console.log(priceFloat);


});