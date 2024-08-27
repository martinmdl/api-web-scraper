import express from 'express';
import validateUrl from './features/validateUrl.js';
import scrapeWeb from './features/scrapeWeb.js';
import getRelevantWords from './features/getRelevantWords.js';
import updateCloud from './features/updateCloud.js';

const api = express();

api.use(express.json());

const cloud = {
    wordDetails: [],
    totalWordOccurrences: 0
}

const fetchedURLs = []

api.get('/', async (req, res, next) => {
    try {

        const productUrl = req.query.productUrl;

        // avoid fetching repeatedly
        validateUrl(productUrl, fetchedURLs);

        const productDescription = await scrapeWeb(productUrl);
        const relevantWords = getRelevantWords(productDescription);

        // include new relevant words to 'cloud'
        updateCloud(relevantWords, cloud);

        res.json(cloud);
        
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