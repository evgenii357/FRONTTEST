import express from 'express';
import path from 'path';

import Product from '../db/Product';

const router = express.Router();

router.use((req, res, next) => {
    console.log(req.method, req.url, (new Date).toUTCString());
    next();
});

router.get('/products/:category', (req, res) => {
    Product.getProducts(req.params.category)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

module.exports = router;