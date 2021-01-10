const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "build")));

const PopularMovies = require("./routes/FetchPopularMovies");
const TopRatedMovies = require("./routes/FetchTopRatedMovies");
const NowPlayingMovies = require("./routes/FetchNowPlayingMovies");
const UpcomingMovies = require("./routes/FetchUpcomingMovies");
const getPopularTvShow = require("./routes/tvShows/getPopular");
const getAiringTodayTvShow = require("./routes/tvShows/getAiringToday");
const getOnTheAirTodayTvshow = require("./routes/tvShows/getonTheAirTvShow");
const getTopRatedTvShow = require("./routes/tvShows/getTopRated");

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.disable("x-powered-by");

app.use(PopularMovies);
app.use(TopRatedMovies);
app.use(NowPlayingMovies);
app.use(UpcomingMovies);
app.use(getPopularTvShow);
app.use(getAiringTodayTvShow);
app.use(getOnTheAirTodayTvshow);
app.use(getTopRatedTvShow);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
