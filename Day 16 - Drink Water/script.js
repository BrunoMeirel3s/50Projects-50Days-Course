const smallCups = document.querySelectorAll(".cup-small"); //All the small cups
const liters = document.getElementById("liters"); //The liters element
const percentage = document.getElementById("percentage"); //The percentage element where will see the amount of water drank
const remained = document.getElementById("remained");

updateBigCup(); //updateBigCup need to called here for it to applied as soon as we enter in the app

/**
 * For each small cup we're going to add a function in the
 * click event called "highlightCups"
 */
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  /**
   * If the current small cup container the full class and the next
   * small cup not it means that we can decrease the current index when
   * it be clicked, this way we're going to remove the full class
   */
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  /**
   * In order to change the background color we're going to check
   * if the index of the this new loop is less or iqual to
   * the index clicked in the frontend, it means that we can change
   * the color of the other cups too
   */
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup(); //updateBigCup is being called here for it to be applied everytime we click in a small cup
}

function updateBigCup() {
  //Here we're getting the current length of all cups with the clas full and the totalcups available
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  //if all the cups be white yet we're going to hide the percentage
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    /**
     * If the condition above not happen we're going to show the percentage
     * and change its values, the height will be change according to the amount
     * of the actual drank cups
     */
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`; //the percentage that will be see in the big cup
  }

  //if all the cups have been drunk we're going to hide the remained container
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    /**
     * if the condition above not be meet we're going to
     * show the remained container and change the liters text
     * according to the amount of cups drank
     */
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}
