const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  /**
   * toggle is used to add and remove a class from an element
   */
  search.classList.toggle("active");

  /**
   * focus is used to insert the cursor inside the input, this way helping us
   * to insert the values
   */
  input.focus();
});
