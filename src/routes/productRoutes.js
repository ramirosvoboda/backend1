const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

router.get('/', (req, res) => {
    fs.readFile(productsFilePath, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error al leer los productos' });
        } else {
            const products = JSON.parse(data);
            res.json(products);
        }
    });
});

router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    fs.readFile(productsFilePath, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error al leer los productos' });
        } else {
            const products = JSON.parse(data);
            const product = products.find(p => p.id === productId);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }
    });
});

module.exports = router;
