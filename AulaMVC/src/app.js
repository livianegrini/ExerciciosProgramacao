const express = require('express');
const path = require('path');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', produtoRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));