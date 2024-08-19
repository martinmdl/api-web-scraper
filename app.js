import express from 'express';
import textCleaner from './cleaner.js';

const api = express();
const HOST = 'localhost';
const PORT = 3000;

api.post('/', (req, res) => {
    const amazonUrl = req.query.productUrl;
    const productDescription = textCleaner(amazonUrl);
    res.send(productDescription);
    if(amazonUrl) {
        res.send(`URL RECIBIDA: ${amazonUrl}`);
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