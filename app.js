import express from 'express';
import validateUrl from './features/validateUrl.js';
import scrapeWeb from './features/scrapeWeb.js';
import getRelevantWords from './features/getRelevantWords.js';
import updateCloud from './features/updateCloud.js';

export default class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
        this.status = 400;
    }
}

const api = express();

api.use(express.json());

const cloud = {
    wordDetails : [],
    totalWordOccurrences : 0
}

const fetchedURLs = []

api.get('/', (req, res) => {
    res.send('Web Crawler');
})


api.post('/', async (req, res, next) => {

    try {

        const amazonUrl = req.query.productUrl;
        if (!validateUrl(amazonUrl, fetchedURLs))
            throw new ValidationError(`${amazonUrl} has already been fetched.`);

        const productDescription = await scrapeWeb(amazonUrl);
        const descriptionWords = getRelevantWords(productDescription);
        updateCloud(descriptionWords, cloud);
        res.send(cloud);
        
    } catch (error) {
        next(error)
    }
});

api.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({
        message: err.message || 'Ocurrió un error en el servidor.',
        stack: err.stack || ''
    });
});

const port = 3000;

api.listen(port, () => console.log(`API running at localhost:${port}`));

/******* SCRIPT *******/
// ./simulateRequests.sh <SERVER> <PORT> <PARAM> <SLEEP_TIME>
// chmod +x simulateRequests.sh
// chmod +x three_requests.sh
// ./simulateRequests.sh localhost 3000 productUrl 4
// ./three_requests.sh localhost 3000 productUrl 6