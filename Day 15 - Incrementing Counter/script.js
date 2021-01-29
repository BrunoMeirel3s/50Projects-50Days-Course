const counters = document.querySelectorAll(".counter"); //The counter are the div where the text is set

//Foreach counter we're going to execute the code bellow
counters.forEach((counter) => {
  counter.innerText = "0"; //The innerText will have zero as its initial value

  //updateCounter will be called in each loop trhough counters
  const updateCounter = () => {
    /**
     * target receives the value of the attibute "data-target"
     * the '+' simbol makes the string a number value
     */
    const target = +counter.getAttribute("data-target");

    //c receives the actual counter text
    const c = +counter.innerText;

    /**
     * incremente receives a number that will be used to increment
     * the counter.inner text, this way the tree counters will increase at the same time
     */
    const increment = target / 200;

    /**
     * if c be less than target it means that we aren't in the end yet
     * so we'll uptdate the counter.innerText with the actual c + increment
     */
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      //this setTimeout will call the updateCounter with 1 miliseconds between each call
      //this way we've the effect of smooth increasement
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  //We're calling updaCounter one time for it to start the proccess
  updateCounter();
});
