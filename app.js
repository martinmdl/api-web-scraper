import express from 'express';
import textCleaner from './cleaner.js';

const api = express();
const HOST = 'localhost';
const PORT = 3000;


api.get('/', (req, res) => {
    res.send('HELLOOOO');
});

// api.get('/productUrl', (req, res) => {
//     res.send('PRODUCT DESCRIPTION');
// });

api.post('/productUrl', (req, res) => {
    const url = req.body.productUrl;
    const productDescription = textCleaner(url);
    res.send(productDescription);
})


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`));

// SCRIPT

// simulateRequests.sh
// https://gist.github.com/tovbinm/f904fc4a29246b2c8b21d0361e259d8b

// ./simulateRequests.sh <hostname> <puerto> <identificador> <número_de_hilos>
// ./simulateRequests.sh localhost 3000 productUrl 6
// ./three_requests.sh







