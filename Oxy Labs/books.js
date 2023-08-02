const axios = require("axios");
const cheerio =  require("cheerio")

const mystery = "https://www.rossmann.de/p/5702017154602";

const book_data = [];

async function getBooks(url){
    try{
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const books = $("article");
        books.each(function(){
            title = $(this).find("h3 a").text();
            price = $(this).find(".price_color").text();
            stock = $(this).find(".availability").text().trim();

            book_data.push({title, price, stock})
        })

        console.log(book_data)
    } catch(eroor){
        console.log(error)
    }
}

getBooks(mystery)