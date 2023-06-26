let timer = setInterval(function() {
    if (animation complete) clearInterval(timer);
    else increase style.left by 2px
  }, 20); // change by 2px every 20ms, about 50 frames per second
  let start = Date.now(); // remember start time

let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(timer); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}

train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }