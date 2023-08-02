import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';
const baseUrl = 'https://www.rossmann.de/de/baby-und-spielzeug/spielzeug/kleinkinder-und-kinderspielzeug/bausteine-und-konstruktionsspielzeuge/c/olcat4_6452252';


// const url = 'https://www.rossmann.de/de/baby-und-spielzeug/spielzeug/kleinkinder-und-kinderspielzeug/bausteine-und-konstruktionsspielzeuge/c/olcat4_6452252';
// const book_data = []


// async function getGenre() {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);
//         //const genre = $('h1').text(); // Corrected: added '()'
//         const books = $(this).find('.rm-tile-product').attr('data-product-id2')      //console.log(genre);
//         console.log(books);

//     } catch (error) {
//         console.log(error);
//     }
// }

// getGenre();


/*const url = 'https://www.rossmann.de/de/baby-und-spielzeug/spielzeug/kleinkinder-und-kinderspielzeug/bausteine-und-konstruktionsspielzeuge/c/olcat4_6452252';

async function getProductIds() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const productIds = [];
    
    // Find all elements with the class 'rm-tile-product' and extract their 'data-product-id' attributes
    $('.rm-tile-product').each(function() {
      const productId = $(this).attr('data-product-id');
      productIds.push(productId);
    });

    return productIds;
  } catch (error) {
    console.log('Error:', error.message);
    return [];
  }
}

// Call the function and log the result
getProductIds().then(productIds => {
  console.log('Product IDs:', productIds);
});
*/


// PRODUCTS FROM ALL PAGES

/*
const totalPages = 5; // Change this value to the number of pages you want to scrape

async function getProductIdsFromPage(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const productIds = [];
    
    // Find all elements with the class 'rm-tile-product' and extract their 'data-product-id' attributes
    $('.rm-tile-product').each(function() {
      const productId = $(this).attr('data-product-id');
      productIds.push(productId);
    });

    return productIds;
  } catch (error) {
    console.log('Error:', error.message);
    return [];
  }
}

async function getAllProductIds() {
  const allProductIds = [];
  for (let page = 1; page <= totalPages; page++) {
    const url = `${baseUrl}?p=${page}`;
    const productIds = await getProductIdsFromPage(url);
    allProductIds.push(...productIds);
  }
  return allProductIds;
}

// Call the function and log the result
getAllProductIds().then(productIds => {
  console.log('All Product IDs:', productIds);
});
*/


//SAVE INTO THE FILE

const totalPages = 5; // Change this value to the number of pages you want to scrape
const outputFile = 'product_ids.json'; // Name of the output file

async function getProductIdsFromPage(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    const productIds = [];
    
    // Find all elements with the class 'rm-tile-product' and extract their 'data-product-id' attributes
    $('.rm-tile-product').each(function() {
      const productId = $(this).attr('data-product-id2');
      productIds.push(productId);
    });

    return productIds;
  } catch (error) {
    console.log('Error:', error.message);
    return [];
  }
}

async function getAllProductIds() {
  const allProductIds = [];
  for (let page = 1; page <= totalPages; page++) {
    const url = `${baseUrl}?p=${page}`;
    const productIds = await getProductIdsFromPage(url);
    allProductIds.push(...productIds);
  }
  return allProductIds;
}

async function saveProductIdsToFile() {
  const productIds = await getAllProductIds();
  
  // Create an array of objects with the required format
  const productObjects = productIds.map(productId => ({
    journey: 'bausteine-und-konstruktionsspielzeuge',
    productNo: productId
  }));

  // Convert the array of objects to a JSON string
  const jsonData = JSON.stringify(productObjects, null, 2);

  // Write the JSON data to the output file
  fs.writeFile(outputFile, jsonData, 'utf8', err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Product IDs saved to', outputFile);
    }
  });
}

// Call the function to save the product IDs to the file
saveProductIdsToFile();
