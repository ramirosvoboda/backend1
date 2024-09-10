const express = require('express');
const app = express();
const port = 3000;

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.json()); 

app.use('/api/products', productRoutes); 
app.use('/api/carts', cartRoutes);       

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de la tienda!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
