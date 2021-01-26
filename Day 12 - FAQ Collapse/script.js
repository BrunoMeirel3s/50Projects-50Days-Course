const toggles = document.querySelectorAll(".faq-toggle"); //Important to remember, classes has to have the dot in front

//For each toggle button we're gonna add an event listener that will add or remove a class to the parentNode of the button
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    //the parentNode is the Parent of the element, the div that contains the button
    toggle.parentNode.classList.toggle("active");
  });
});
