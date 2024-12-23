let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let heading = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  heading.innerText = `Level - ${level}`;
  let randInd = Math.floor(Math.random() * 4);
  let randColor = btns[randInd];
  let randbtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  btnFlash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    heading.innerHTML = `Game over press your score was <b>${level}</b> <br> press any key to start`;
    bdy.style.backgroundColor = "red";
    setTimeout(function () {
      bdy.style.backgroundColor = "white";
    }, 100);
    reset();
  }
}
let bdy = document.querySelector("body");
function btnPress() {
  let btnss = this;
  userFlash(btnss);
  userColor = btnss.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btnss of allBtns) {
  btnss.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
