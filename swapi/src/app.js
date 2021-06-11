  
const express = require('express');
const app = express();

const router = express.Router();

//Rotas
const index = require('./routes/index');
const filmsRoute = require('./routes/filmsRoute');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/', index);
app.use('/api/films', filmsRoute);

//Carregando lista de filmes na memoria
const filmService = require('./model/filmsService');
filmService.listAllFilms( function(body){
   global.returnService = body;

});

module.exports = app;