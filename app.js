import express from 'express';
import validateUrl from './features/validateUrl.js';
import scrapeWeb from './features/scrapeWeb.js';
import getRelevantWords from './features/getRelevantWords.js';
import updateCloud from './features/updateCloud.js';

const api = express();

const cloud = {
    wordDetails : [],
    totalWordOcurrencies : 0
}

const fetchedURLs = []

api.get('/', (req, res) => {
    res.send('Web Crawler');
})

api.post('/', async (req, res) => {

    const amazonUrl = req.query.productUrl;
    const validUrl = validateUrl(amazonUrl, fetchedURLs)
    if (!validUrl) return res.send(`${amazonUrl} has already been fetched.`)
    const productDescription = await scrapeWeb(validUrl);
    const descriptionWords = getRelevantWords(productDescription);
    updateCloud(descriptionWords, cloud);
    res.send(cloud);

});

const port = 3000;

api.listen(port, () => console.log(`API running at localhost:${port}`));

/******* SCRIPT *******/
// ./simulateRequests.sh <SERVER> <PORT> <PARAM> <SLEEP_TIME>
// chmod +x simulateRequests.sh
// chmod +x three_requests.sh
// ./simulateRequests.sh localhost 3000 productUrl 4
// ./three_requests.sh localhost 3000 productUrl 4