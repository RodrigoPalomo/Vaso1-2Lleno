const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000.");
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/detail', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

app.get('/productCard', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/productCard.html'));
});

app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/about.html'));
});