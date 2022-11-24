const cheerio = require("cheerio");
const axios = require("axios");


const url="";

async function getGenre(){
    try{
        const response = await axios.get(url,{
            headers:{
                "User-Agent":"custom-user-agent string"
            }
        });
    }
    catch(error){
        console.error(error);
    }
}

getGenre();