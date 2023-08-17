let timer = 60;
let score = 0;
let hitrn = 0;

function makebubble() {
  var clutter = "";
  var num = Math.floor;

  for (var i = 1; i <= 182; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER </h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (detail) {
  var clickednum = Number(detail.target.textContent);

  if (clickednum === hitrn) {
    increaseScore();
    makebubble();
    getNewHit();
  }
});

makebubble();
runTimer();
getNewHit();
// increaseScore();
