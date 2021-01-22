/**
 * We're inserting the boxes in the 'insert' div only we the user press the first button
 * taking the 'insert' div we're inserting the content in there when the window listen the keydown
 * event
 */

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
      <div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${e.keyCode}
        <small>event.key</small>
      </div>
      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>
`;
});
