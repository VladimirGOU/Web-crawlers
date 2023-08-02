const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.rossmann.de/p/5702017154602"

async function getGenre(){
    try {
        const response = await axios.get(url);
        const $=cheerio.load(response.data);
        const genre = $("h1").text()
        console.log(genre)
    } catch(error){
        console.log(error)
    }
}
getGenre()