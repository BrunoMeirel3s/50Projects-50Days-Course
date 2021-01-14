const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerHTML = `${load}%`;

  /**
   * scale receive the current value that has to be transformed to a similar value as output,
   * receive the minimum and max value of the original interval,
   * the last values are the minimum and max of the target interval
   * this way scale will return a proporcional value
   */
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/**
 * This scale was get in stackoverflow, it receives a min and max and make something similar to
 * a rule of three to find and return the proporcional value
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
