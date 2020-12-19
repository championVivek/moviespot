const route = require('express').Router()
const FetchTopRatedController = require('../controllers/FetchTopRatedMovies')

route.get('/topratedmovies',  FetchTopRatedController.FetchTopRatedMovies)

module.exports = route