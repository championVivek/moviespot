const route = require('express').Router()
const FetchUpcomingController = require('../controllers/FetchUpcomingMovies')

route.get('/upcomingmovies',  FetchUpcomingController.FetchUpcomingMovies)

module.exports = route