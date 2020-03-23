/* тоглогчын ээлжийг хадгалах ээжлийн хадгалах хувьсагч, нэгдүгээр тоглогчыг=0, хоёрдугаар тоглогыг 1 гэе*/
var activeplayer = 0;
/*тоглогчдыг оноог хадгалах хувьсагч*/
var scores = [0, 0];

/* тоглогчын ээлжиндээ хадгалах оноог хадгалах хувьсагч*/
var roundscore = 0;
/* шооны аль талаараа буусаныг хадгалах хувьсагч 1-6 гэсэн утгыг хувьсагч, санамсаргүйгээр үүсгэж өгнө*/

/* Программ эхлэхэд бэлтгэе */

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice ");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".dice ").style.display = "block";
  document.querySelector(".dice ").src = "dice-" + diceNumber + ".png";
});
