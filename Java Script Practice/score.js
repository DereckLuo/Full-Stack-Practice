
var p1But = document.querySelector("#p1");
var p2But = document.querySelector("#p2");
var resetBut = document.querySelector("#reset");
var p1Display = document.querySelector("#p1score");
var p2Display = document.querySelector("#p2score");
var h1 = document.querySelector("h1");
var numInput = document.querySelector("input");
var winDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1But.addEventListener("click", function(){
  if(!gameOver){
    p1Score ++;
    p1Display.textContent = p1Score;
    if(p1Score === winningScore){
      // p1Display.style.color = "Green";
      p1Display.classList.add("winner");
      gameOver = true;
    }
  }
});

p2But.addEventListener("click", function(){
  if(!gameOver){
    p2Score ++;
    p2Display.textContent = p2Score;
    if(p2Score === winningScore){
      // p2Display.style.color = "Green";
      p2Display.classList.add("winner");
      gameOver = true;
    }
  }
});

numInput.addEventListener("change", function(){
  winDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
});

function reset(){
  p1Display.textContent = "0";
  p2Display.textContent = "0";
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  // p1Display.style.color = "black";
  // p2Display.style.color = "black";
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
}

resetBut.addEventListener("click", function(){
    reset();
});
