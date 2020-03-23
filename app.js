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
//шоог шидэх эвент линстенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 дотор санамсаргүй тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зурагыг веб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  //буусан санамсаргүй тоонд харгалзах шооны зурагыг веб дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";

  // буусан тоо нь 1 ялгаатай бол тоглогчын ээлжийн оноог нэмэгдүүлнэ
  if (diceNumber !== 1) {
    //1 ээс ялгаатай тоо буулаа тоглогчын оноогд нэмж өгнө.
    roundscore = roundscore + diceNumber;
    document.getElementById("current-" + activeplayer).textContent = roundscore;
  } else {
      //тоглогчын цуглуулсан оноог 00 болгоно
    document.getElementById("current-" + activeplayer).textContent = 0;
    //Тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ

    // 1-тэй тэнцүү учир тоглогчын ээлжийг солиж өгнө.
    activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
    // Тоглогчын улааг цэгийг шилжүүлнэ
    document.querySelector(".player-0-panel").classList.
  }
});
