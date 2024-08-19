import express from 'express';
import textCleaner from './cleaner.js';

const api = express();
const HOST = 'localhost';
const PORT = 3000;


api.get('/', (req, res) => {
    res.send('HELLOOOO');
});

api.post('/productUrl', (req, res) => {
    const url = req.query.productUrl;
    const productDescription = textCleaner(url);
    res.send(productDescription);
});


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}`));

// SCRIPT

// simulateRequests.sh
// https://gist.github.com/tovbinm/f904fc4a29246b2c8b21d0361e259d8b

// ./simulateRequests.sh <server_address> <port_number> <param_name> <sleep_time>
// chmod +x simulateRequests.sh
// ./simulateRequests.sh localhost 3000 productUrl 6
// ./three_requests.sh

// recibo una request:
// curl -X POST localhost:3000/productUrl=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00SMBFZNG"





