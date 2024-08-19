import express from 'express';
import textCleaner from './cleaner.js';

const api = express();
const HOST = 'localhost';
const PORT = 3000;

api.use(express.urlencoded({ extended: true }));

api.get('/', (req, res) => {
    res.send('HOMEE');
});

// const fullUrl = req.originalUrl;
// const fullUrl = req.url;
// const amazonUrl = req.query.productUrl;
// const insideParams = req.params;

api.post('/productUrl', (req, res) => {
    const url = req.url;
    // const productDescription = textCleaner(url);
    // res.send(productDescription);
    if(url) {
        res.send(`URL RECIBIDA: ${url}`);
    } else {
        res.status(400).send('URL no encontrada');
    }
});


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`));

/******* SCRIPT *******/
// ./simulateRequests.sh <SERVER> <PORT> <PARAM> <SLEEP_TIME>
// chmod +x simulateRequests.sh
// chmod +x three_requests.sh
// ./simulateRequests.sh localhost 3000 productUrl 6
// ./three_requests.sh localhost 3000 productUrl 6



