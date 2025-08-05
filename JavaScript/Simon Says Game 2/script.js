let gameSeq = [];
let userSeq = [];

let btns = ["red", "orange", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("white");
  setTimeout(function () {
    btn.classList.remove("white");
  }, 250);
}

function playSequence(onComplete) {
  let indx = 0;

  if (gameSeq.length === 0) {
    onComplete();
    return;
  }

  const intervalId = setInterval(() => {
    let color = gameSeq[indx];
    let btn = document.querySelector(`.${color}`);
    btnFlash(btn);
    indx++;

    if (indx >= gameSeq.length) {
      clearInterval(intervalId);
      if (onComplete) {
        setTimeout(onComplete, 250);
      }
    }
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  playSequence(() => {
    let randIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[randIdx];
    gameSeq.push(ranColor);

    let ranBtn = document.querySelector(`.${ranColor}`);
    setTimeout(() => btnFlash(ranBtn), 250);
  });
}

function chkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was ${level} <br>Press Any Key To Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  chkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
