import express from 'express';
import scrapeWeb from './features/scraper.js';
import getRelevantWords from './features/cleaner.js';
import updateCloud from './features/updateCloud.js';

const api = express();

const cloud = {
    wordDetails : [],
    totalWordOcurrencies : 0
}

api.get('/', (req, res) => {
    res.send('Web Crawler');
})

api.post('/', async (req, res) => {

    const amazonUrl = req.query.productUrl;
    const productDescription = await scrapeWeb(amazonUrl);
    const descriptionWords = getRelevantWords(productDescription);
    updateCloud(descriptionWords, cloud);
    res.send(cloud);

});

const port = process.env.PORT || 8080;

api.listen(port, () => console.log(`API running at localhost:${port}`));

/******* SCRIPT *******/
// ./simulateRequests.sh <SERVER> <PORT> <PARAM> <SLEEP_TIME>
// chmod +x simulateRequests.sh
// chmod +x three_requests.sh
// ./simulateRequests.sh localhost 3000 productUrl 6
// ./three_requests.sh localhost 3000 productUrl 6