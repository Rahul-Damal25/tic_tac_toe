const boxes = document.querySelectorAll(".box");
const turn = document.getElementById("turn");
const reset = document.getElementById("reset");
const winner = document.getElementById("message");
const voice = document.getElementById("audio");
const wow = document.getElementsByClassName("audio")[0];
const sound = document.getElementById("click");
const looser = document.getElementById("fail");

let currentPlayer = "𝒙";
let gameOver = false;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    console.log("you");

    if (box.textContent !== "" || gameOver) {
      return;
    }

    box.textContent = currentPlayer;
    if (currentPlayer === "𝒙") {
      box.style.backgroundColor = "#A8DF8E";
      box.style.color = "white";
    } else {
      box.style.backgroundColor = "#FF937E";
      box.style.color = "white";
    }
    checkWinner();

    if (!gameOver) {
      if (currentPlayer === "𝒙") {
        currentPlayer = "𝒐";
      } else {
        currentPlayer = "𝒙";
      }

      turn.textContent = `Player ${currentPlayer} Turn `;
      sound.currentTime = 0;
      sound.play();
    }
  });
});

function checkWinner() {
  for (let pattern of winningPatterns) {
    let first = boxes[pattern[0]].textContent;
    let second = boxes[pattern[1]].textContent;
    let third = boxes[pattern[2]].textContent;

    if (first !== "" && first === second && second === third) {
      winner.textContent = `ᴡɪɴɴᴇʀ ${first}`;
      winner.style.display = "block";
      gameOver = true;

      document.body.classList.add("win");

      turn.textContent = `Player ${first} Winner !`;
      voice.play();
      wow.play();

      return;
    }
  }

  let draw = true;

  boxes.forEach(function (box) {
    if (box.textContent === "") {
      draw = false;
    }
  });
  if (draw) {
    // alert("Game Draw !");
    winner.textContent = "ᴰʳᵃʷ ᴳᵃᵐᵉ";
    winner.style.display= "block"
    gameOver = true;
    turn.textContent = "Game Draw !";
    // looser.currentTime = 0
    looser.play();
  }
}

reset.addEventListener("click", function () {
  boxes.forEach(function (box) {
    box.textContent = "";
    box.style.backgroundColor = "#FFFBE6";
  });

  currentPlayer = "𝒙";
  gameOver = false;

  turn.textContent = "Player 𝒙 Turn";
  //  console.log("hey")

  winner.textContent = "";
  winner.style.display = "none";

  //  document.body.style.backgroundColor = "antiquewhite"
  document.body.classList.remove("win");
});
