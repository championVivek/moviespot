const route = require('express').Router()
const getOnTheAirController = require('../../controllers/tvShows/getOnTheAirTvShow')

route.get('/tv/ontheairtvshow', getOnTheAirController.getOnTheAirTvShow)

module.exports = route