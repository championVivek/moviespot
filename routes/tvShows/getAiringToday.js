const route = require('express').Router()
const getAiringTodayController = require('../../controllers/tvShows/getAiringToday')

route.get('/tv/airingtodaytvshow', getAiringTodayController.getAiringTodayTvShow)

module.exports = route