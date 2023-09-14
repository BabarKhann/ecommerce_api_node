require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');
const app = require('express')();

const port = process.env.PORT || 1337;

app.get('/products', listProducts);

app.listen(port, () => {
    console.log(`server listening on ${port}`)
});

async function listProducts(req, res) {
    const productsFile = path.join(__dirname, './products.json')

    try {

        const data = await fs.readFile(productsFile);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(JSON.parse(data));

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}