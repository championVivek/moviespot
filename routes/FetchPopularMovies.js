const route = require('express').Router()
const FetchPopularController = require('../controllers/FetchPopularMovies')

route.get('/popularmovies',  FetchPopularController.FetchPopularMovies)

module.exports = route