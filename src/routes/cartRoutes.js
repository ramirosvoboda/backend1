const express = require('express');
const router = express.Router();

let cart = [];

router.get('/', (req, res) => {
    res.json(cart);
});

router.post('/', (req, res) => {
    const product = req.body;
    cart.push(product);
    res.status(201).json({ message: 'Producto agregado al carrito', cart });
});

module.exports = router;
