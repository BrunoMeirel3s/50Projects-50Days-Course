const boxes = document.querySelectorAll(".box"); //Here we're getting all the box elements

//the function checkBoxes will be called whenever the scroll event be called
window.addEventListener("scroll", checkBoxes);

//we've to call it once for it to show the first elements
checkBoxes();

function checkBoxes() {
  //triggerBottom receives the window.innerHeight that is the height of the active viewport in our browser
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //boxTop receives the top position of the current box, this way we can check if it is inside the current active viewport
    const boxTop = box.getBoundingClientRect().top;

    /**
     * Here we'll check if the top of the current element is inside of the activeviewport, this way we can add
     * or remove the "show" class
     */
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
