const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT = 3000;

/*
*   Create WebScraper
*   @see {@link https://www.npmjs.com/package/cheerio}
*/

const URL = 'The URL you want to search ';
const data = [];

axios(URL)
    .then(res => {
        const htmlParser = res.data;
        const $ = cheerio.load(htmlParser);
        $(".searchresultitem", htmlParser).each(function() {
            const title = $(this).find(".title").text();
            const price = $(this).find(".price--OX_YW").text();
            data.push({title, price});
            console.log(data);
        })
    }).catch(error => console.log(error));

app.listen(PORT, (req, res) => {
    console.log(`Server running : ${PORT}`);
})
