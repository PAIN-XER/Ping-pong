import Ball from "./ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;

    ball.update(delta);
    // updtate code
//   console.log(delta);

  }

  lastTime = time;
  window.requestAnimationFrame(update);
//   console.log(time);
}

window.requestAnimationFrame(update);
