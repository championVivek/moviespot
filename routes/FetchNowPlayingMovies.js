const route = require('express').Router()
const FetchNowPlayingController = require('../controllers/FetchNowPlayingMovies')

route.get('/nowplaying',  FetchNowPlayingController.FetchNowPlayingMovies)

module.exports = route