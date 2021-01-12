/**
 * Here we're only getting the elements and putting then in constants
 */
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

/**
 * depending on the button clicked we'll add or remove the class
 * 'show-navs' in the container element
 */
open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));
