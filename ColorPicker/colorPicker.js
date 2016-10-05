var colorSquares = document.querySelectorAll(".square");
var displayColorH1 = document.getElementById("colorDisplayH1");
var numOfColor = 6;
var colorsArray = generateColorArray(numOfColor);
var anwserColor = pickColor();
var displayMessage = document.getElementById("message");
var gameBanner = document.querySelector("h1");
var rstBtn = document.getElementById("rstBtn");
var btnAction = document.querySelectorAll(".buttonAction");

init();

function init(){
  alert("Please View this in Chrome, currently It may not work in Mozilla Firefox");
  setupSquares();
  setupButtons();
  reset();
}

//setup easy and hard buttons
function setupButtons(){
  for(var i=0;i<btnAction.length;i++){
    btnAction[i].addEventListener("click",function(){
    for(var i=0;i<btnAction.length;i++){
      btnAction[i].classList.remove("buttonSelected");
    }
    this.classList.add("buttonSelected");
    if(this.textContent==="Easy"){
      numOfColor = 3;
    } else{
      numOfColor = 6;
    }  
    reset();
    });
  }   
  rstBtn.addEventListener("click",function(){
    reset();
  });
}

//setup all events for squares
function setupSquares(){
  for(var i =0;i<colorsArray.length;i++){
    // to decorate squares with colors
    colorSquares[i].style.background = colorsArray[i];
    // click event for colorSquares
    colorSquares[i].addEventListener("click",function(){
      var clickedColor = this.style.background;
      if(anwserColor === clickedColor){
        correctChoice(clickedColor);
      } else{
        wrongChoice(this);
      }
    });
  }  
}

// for picking a random number
function pickColor(){
  var x = Math.floor(Math.random()*(colorsArray.length));
  return colorsArray[x];
}

// change colorsArray to all squares to a color(colorX)
function changeColor(colorX){
  for(var i= 0 ;i< colorsArray.length;i++){
    colorSquares[i].style.background = colorX;
  }
}

// generate a whole array of random colorsArray
function generateColorArray(num){
  var arr = [];
  for(var i =0;i<num;i++){
    arr.push(generateAColor());
  }
  return arr;
}

// generate one random color
function generateAColor(){
  var rgb = 'rgb(';
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var final = rgb +r+', '+g+', '+b+')';
  return final;
}

// when clicked a correct color
function correctChoice(clickedColor){
  changeColor(clickedColor);
  //change display message to Correct
  displayMessage.textContent = "Correct!!";
  //update the background color of H1
  gameBanner.style.background = clickedColor;
  //reset text in text content
  rstBtn.textContent = "Play Again?";
}

// when clicked a wrong color
function wrongChoice(element){
  element.style.background = '#262626';
  // element.classList.add("wrong");
  displayMessage.textContent = "Try Again!!";
}

function reset(){
  colorsArray = generateColorArray(numOfColor);
  anwserColor = pickColor();
  rstBtn.textContent = "New Colors";
  displayColorH1.textContent = anwserColor;
  for(var i =0;i<6;i++){
    if(colorsArray[i]!=null){
      colorSquares[i].style.display = "block";
    colorSquares[i].style.background = colorsArray[i];        
    } else {
      colorSquares[i].style.display = "none";
    }
  }
  displayColorH1.textContent = anwserColor;
  gameBanner.style.background = "steelblue";
  message.textContent = "";
}