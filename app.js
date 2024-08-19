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

// ./simulateRequests.sh <server_address> <port_number> <param_name> <sleep_time>
// chmod +x simulateRequests.sh
// chmod +x three_requests.sh
// ./simulateRequests.sh localhost 3000 productUrl 6
// ./three_requests.sh localhost 3000 productUrl 6

// recibo una request:
// curl -X POST localhost:3000/productUrl=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00SMBFZNG"

// curl: (3) URL using bad/illegal format or missing URL
// sleep: missing operand
// Try 'sleep --help' for more information



