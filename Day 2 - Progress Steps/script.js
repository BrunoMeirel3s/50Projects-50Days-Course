/**
 * In this first step we're getting the elements in consts
 * this way we can call then in our JavaScript
 */
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

/**
 * addEventListiner is used here for add the function
 * click in the next button
 */
next.addEventListener("click", () => {
  currentActive++; //everytime we call next current value will be incresead

  /**
   * if currentActive be bigger than circles.length it means
   * that we've passed the limit this way currenctAtive receives
   * circles.length as it value
   */
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  /**
   * if current active be smaller then 1 it means that we are
   * at the beggin, this way current active receives 1
   */
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

/**
 * update we'll be called in next as prev button,
 * in circles.forEach we're looping through circles and
 * checking if the current index is smaller then currentActive
 * this way we can add or remove the class active
 */
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  /**
   * progress.style.width will be updated according the amount of
   * circles active, this way we'll add the blue background to progress
   */
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
