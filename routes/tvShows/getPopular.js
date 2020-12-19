const route = require('express').Router()
const getPopularTvShowController = require('../../controllers/tvShows/getPopular')

route.get('/tv/populartvshow', getPopularTvShowController.getPopularTvShow)

module.exports = route