const express = require('express');
const app = express();
const path = require('path');
let routesMain = require('./routes/main');
let routesProducts = require('./routes/products');
let routesUsers = require('./routes/users');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000.");
});

// HOME
app.use('/', routesMain);
app.use('/about', routesMain);
// PRODUCTOS
app.use('/products', routesProducts);
// USUARIO
app.use('/users', routesUsers);