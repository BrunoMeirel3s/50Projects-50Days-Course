//API_URL is used to access the API where we can get the movies list
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5f30577a50567ee204256ab103c231c4&page=1";

//IMG_PATH will be used to get to img of the movie concataned with the movie_path
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

//API used to make a search in the api, it will return the list of movies according our search
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=5f30577a50567ee204256ab103c231c4&query=";

//Here we're getting the elements
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//Get Initial Movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url); //The first request
  const data = await res.json(); //The response will be setted in the data const

  showMovies(data.results);
}

/*
    showMovies is the function that will show the movies 
    in our frontEnd, creating the elements in a automatic way
*/
function showMovies(movies) {
  main.innerHTML = ""; //clear all the elements

  //For each movie we're goint to create the a new div with the HTML
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

/*
    When we make a submit with the form we're going to make
    a request to SEARCH+API with the value take from the search input
*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
