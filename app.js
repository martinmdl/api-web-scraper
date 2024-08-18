import express from 'express';

const api = express();
const HOST = 'localhost';
const PORT = 3000;


api.get('/', (req, res) => {
    res.send('HELLOOOO');
});

api.get('/prodDesc', (req, res) => {
    res.send('PRODUCT DESCRIPTION');
});


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));









