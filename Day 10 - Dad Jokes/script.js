const jokeEl = document.getElementById("joke"); //The div with the joke
const jokeBtn = document.getElementById("jokeBtn"); //the generate joke button

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

/**
 * The generateJoke makes a request using fetch and for this we can two different ways,
 * this one use async await, using await we have to mark this function as async, this way it won't crash if
 * the request takes longer
 */
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

/**
 * This other approuch use the promise concept, promises will wait until the request be completed and then pass for
 * the next function
 */
/*
function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}*/
