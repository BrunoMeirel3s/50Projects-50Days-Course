const tagsEl = document.getElementById("tags"); //The tags container
const textarea = document.getElementById("textarea"); //The textarea where we'll insert the options

textarea.focus(); //insert the mouse in the textarea

//The createTags function will be called in any keyup event
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value); //target.value is the value inserted in the textarea

  //if the key enter be pressed we're going to call the randomSelect and clear the textarea
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

/*
    The createTags functions receives the values inserted in the textarea
    and then makes a split sorting out the elements by comma (',')
    the filter and map bellow are used to remove the empty spaces before and after 
    the element
*/
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = ""; //Here we're cleaning the div where we're going to insert the tags

  /**
   * for each tag we're going to create a span element with the class span
   * and insert the tag in the innerText of this new element
   */
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;

    //The final step is to insert the span element in the appendChild of the tagsEl
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  /**
   * interval will be called at each 100 miliseconds
   * selecting a random tag, after that highlighting the tag
   * after 100 miliseconds removing the highlight
   */
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highLightTag(randomTag);
    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  /**
   * The interval above will be stopped in this settimeout bellow
   * when we'll clear the interval and highlight a random tag again
   */
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLightTag(randomTag);
    }, 100);
  }, times * 100);
}

/*
    The pickRandomTag will be used to return a tag by its indice
    sorted using the math.random function * tags.length
*/
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

//HighLight and UnHighLight are used to add or remove the highlight class
function highLightTag(tag) {
  tag.classList.add("highlight");
}

function unHighLightTag(tag) {
  tag.classList.remove("highlight");
}
