const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const cors = require("cors");
require('dotenv').config()

const app = express();


const PopularMovies = require("./routes/FetchPopularMovies");
const TopRatedMovies = require("./routes/FetchTopRatedMovies");
const NowPlayingMovies = require("./routes/FetchNowPlayingMovies");
const UpcomingMovies = require("./routes/FetchUpcomingMovies");
const getPopularTvShow = require("./routes/tvShows/getPopular");
const getAiringTodayTvShow = require("./routes/tvShows/getAiringToday");
const getOnTheAirTodayTvshow = require("./routes/tvShows/getonTheAirTvShow");
const getTopRatedTvShow = require("./routes/tvShows/getTopRated");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.use(PopularMovies);
app.use(TopRatedMovies);
app.use(NowPlayingMovies);
app.use(UpcomingMovies);
app.use(getPopularTvShow);
app.use(getAiringTodayTvShow);
app.use(getOnTheAirTodayTvshow);
app.use(getTopRatedTvShow);

let PORT = process.env.PORT || 5555

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});

