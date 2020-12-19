const route = require('express').Router()
const getTopRatedController = require('../../controllers/tvShows/getTopRated')

route.get('/tv/gettopratedtvshow', getTopRatedController.getTopRatedTvShow)

module.exports = route