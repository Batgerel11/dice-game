var activePlayer;
var isGameOver;
var scores;

var roundScore;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

initGame();
//Тоглоом шинээр эхлэхэд бэлтгэнэ
function initGame() {
  isGameOver = false;

  activePlayer = 0;

  scores = [0, 0];

  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  diceDom.style.display = "none";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

// Шоо шидэх хэсэг

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isGameOver !== true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зураг дэлгэцэнд харуулна
    diceDom.style.display = "block";

    // буусан тооны харгалзах зурагыг дэлгэцэнд харуулна
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дуусан тул New game товчыг дарж эхэлнэ үү?");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isGameOver !== true) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      // Тоглоом дууссан төлөвт оруулна
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дуусан тул New game товчыг дарж эхэлнэ үү?");
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", initGame);
