/**
 * panels receive all the elements that contains the classe 'panel'
 */
const panels = document.querySelectorAll(".panel");

/**
 * We're going to loop through panels using forEach, and for each element
 * we're going to listen the click event and when it be called we're gonna call
 * the removeActiveClasses and add the class active to the element
 */
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

/**
 * removeActiveClasses will be called in the click event in the function above,
 * removeActiveClasses loop through panels and remove 'active'
 */
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
