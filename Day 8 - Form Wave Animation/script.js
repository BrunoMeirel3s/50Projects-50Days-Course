const label = document.querySelectorAll("label");

/**
 * Here we're getting all the labels and making a map through all the
 * letters of it one, using the split method we can split the text in each letter and
 * create a array with it, the map loop through this array and add each letter into a span.
 *
 * the transition-delay is responsible to apply the delay in each letter
 * this way the wave effect will be applied
 */
label.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
