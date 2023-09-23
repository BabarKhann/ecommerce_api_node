require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');
const app = require('express')();

const api = require('./api');

const port = process.env.PORT || 1337;

// routes
app.get('/products', api.listProducts);

app.listen(port, () => {
    console.log(`server listening on ${port}`)
});