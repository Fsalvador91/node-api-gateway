const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
const moviesServiceProxy = httpProxy('http://localhost:3000');

var logger = require('morgan');
app.use(logger('dev'));

app.get('/movies', (req, res, next) => moviesServiceProxy(req, res, next));
app.get('/movies/:id', (req, res, next) => { moviesServiceProxy(req, res, next)})

app.listen(10000, () => {
    console.log('API Gateway rodando');
});