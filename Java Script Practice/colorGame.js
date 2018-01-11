var easyMode = false;
var colors = new Array(6);
for(var i = 0; i < 6; i++){
  colors[i] = genRandomColor();
  if(easyMode && i >= 3){
    colors[i] = "rgb(35, 35, 35)";
  }
}


var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*5)];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

resetButton.addEventListener("click", function(){
  this.textContent = "New Colors";
  reset();
})

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  easyMode = true;
  reset();
})

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  easyMode = false;
  reset();
})

for (var i = 0; i < squares.length; i++){
  //add initial colors to sqaures
  squares[i].style.backgroundColor = colors[i];
  //add click listents to squares
  squares[i].addEventListener("click", function(){
    //compare color with picked color
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){   //guess correct
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else{                               //guess wrong
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

colorDisplay.textContent = pickedColor;

function genRandomColor(){
  var R = Math.floor(Math.random()*255);
  var G = Math.floor(Math.random()*255);
  var B = Math.floor(Math.random()*255);
  return "rgb(" + R + ", " + G + ", " + B + ")";
}

function changeColors(color){
  //loop through all sqaures and change color
  for (var i = 0; i < colors.length; i++){
    if(easyMode && i >= 3) break;
    squares[i].style.backgroundColor = color;

  }
}

function reset(){
  //generate all new colors;
  for(var i = 0; i < 6; i++){
    colors[i] = genRandomColor();
    if(easyMode && i >= 3){
      colors[i] = "rgb(35, 35, 35)";
    }
  }
  if(easyMode){
    pickedColor = colors[Math.floor(Math.random()*2)]
  }
  else{
    pickedColor = colors[Math.floor(Math.random()*5)];
  }

  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < 6; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}
