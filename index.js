var dice1 = document.querySelector(".dice-img1");
var dice2 = document.querySelector(".dice-img2");
var title = document.querySelector(".title");
var button = document.querySelector(".play-button");

function Play(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2){
    title.textContent = "Draw. Roll again!";
  }
  else if(randomNumber1 > randomNumber2){
    title.textContent = "Player 1 Wins!";
  }
  else if(randomNumber1 < randomNumber2){
    title.textContent = "Player 2 Wins!";
  }
}

button.addEventListener("click", Play);
