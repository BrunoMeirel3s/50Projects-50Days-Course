/**
 * All the elements that we're goint to interact with
 */
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

//activeSlide will represent the actual active slide
let activeSlide = 0;

/**
 * The functions rightBtn and LeftBtn will only increase or decrease the activeSlide const
 * after that call the setBgBody and setActiveSlide for it to change the image in HTML
 */
rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

//We have to call it at least one time alone for it to set the initial bg image
setBgToBody();

/**
 * The setBgToBody only set the body background to be similiar to the
 * current activeSlide
 */
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

/**
 * setActiveSlide removes the class active from all the slides
 * and add it to the current activeSlide
 */
function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}
