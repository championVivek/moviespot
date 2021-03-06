const axios = require("axios");
const showthis = [];
const movieList = [];

exports.getOnTheAirTvShow = async (req, res) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movieList = result.data;
  for (let i = 0; i < Object.keys(movieList.results).length; i++) {
    showthis[i] = [
      movieList.results[i].original_name,
      "https://image.tmdb.org/t/p/w500" + movieList.results[i].poster_path,
      movieList.results[i].id,
    ];
  }
  res.send(showthis);
};
