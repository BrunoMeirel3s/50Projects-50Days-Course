//sounds is an array that receives all the sounds' names that we have in the project
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

/**
 * The buttons will be created according the const above, this way
 * we're going to loop through the sounds array and for it value
 * will be created a button with its innerText iqual to the current
 * value of the array. after that the new button will be added using the
 * appendChild method
 */
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  /**
   * click event of each button will be used to play the sound with id similar to the current element
   * of this loop
   */
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  //the element with the id buttons is a div container of the buttons
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0; //make the current time zero again
  });
}
