import express from 'express';
import scrapeWeb from './scraper.js';
import cleanText from './cleaner.js';
import countWordOccurrences from './wordcounter.js';

const api = express();

api.get('/', (req, res) => {
    res.send('WORKING')
})

api.post('/', async (req, res) => {

    const amazonUrl = req.query.productUrl;
    const originalProductDescription = await scrapeWeb(amazonUrl);
    const productDescription = cleanText(originalProductDescription);
    const wordsOccurrences = countWordOccurrences(productDescription);
    res.send(wordsOccurrences);

});

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`));

/******* SCRIPT *******/
// ./simulateRequests.sh <SERVER> <PORT> <PARAM> <SLEEP_TIME>
// chmod +x simulateRequests.sh
// chmod +x three_requests.sh
// ./simulateRequests.sh localhost 3000 productUrl 6
// ./three_requests.sh localhost 3000 productUrl 6