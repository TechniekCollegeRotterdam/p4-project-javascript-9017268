const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


let speed = 14; //dit is de snelheid , eerst was dit 7, dit moet nog veranderen
let tileCount = 10; //dit is de grootte
let pos1 = 10; // voor de random positie vlieg
let pos2 = 20; // voor de random positie mier
let pos3 = 30; // voor de random positie lieveheersbeestje
let tileSize = canvas.width / tileCount;

let kikkerX = 10;
let kikkerY = 10;

let vliegX = 20;
let vliegY = 20;

let snakeParts = []; //array met snake parts (oftewel een lijstje)
let tailLength = 2;

let liefX = 30;
let liefY = 30;

let mierX = 40;
let mierY = 40;

let inputsXVelocity = 0;
let inputsYVelocity = 0;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

const gulpSound = new Audio("sound.mp3");//geluid


//game loop
function drawGame() {
  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return;
  }

  clearScreen();
  checkAppleCollision();
  drawApple();
  drawSnake();

  drawScore();

  if (score > 5) {  //als de score hoger is dan 9 zoals hier, dan is de snelheid 10 bijv.
    speed = 10;
  }
  if (score > 10) {
    speed = 20;
  }

  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  //walls
  //eerst had ik canvas.width en canvas.height ,maar toen zag ik dat het met de tailcount te maken had en zo heb ik de code veranderd. 
  //80-5, net niet van de canvas af. Ook het zelfde verhaal met de andere coordinaten.
  if (kikkerX <= -5 || kikkerX > 75) { //width 800   
    gameOver = true;
  } else if (kikkerY <= -5 || kikkerY > 55) { //height 600
    gameOver = true;
  }

  console.log(canvas.witdh);

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === kikkerX && part.y === kikkerY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";

    if (gameOver) {
      ctx.fillStyle = "white";
      ctx.font = "50px Verdana";

      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop("0", " white");

      // Fill with gradient
      ctx.fillStyle = gradient;

      ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }

    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
  }

  return gameOver;
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 50, 10);
}

function clearScreen() {
  ctx.fillStyle = "orange"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  //let part = snakeParts[0];
  let img = document.getElementById("kikker");
  for (let i = 0; i < snakeParts.length; i++) {
    //let part = snakeParts[i];
    //ctx.drawImage(img, parts, partss, tileCount, tileCount);
    ctx.drawImage(img, kikkerX * tileCount, kikkerY * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(kikkerX, kikkerY)); //put an item at the end of the list next to the head
  while (snakeParts.length > tailLength) {
    snakeParts.shift(); // remove the furthet item from the snake parts if have more than our tail size.
  }

  ctx.fillRect(kikkerX * img, kikkerY * img, tileSize, tileSize);
}

function changeSnakePosition() {
  kikkerX = kikkerX + xVelocity;
  kikkerY = kikkerY + yVelocity;
}


//console.log(vlieg);
function drawApple() {
  let vlieg = document.getElementById("vlieg");
  let vlieg2 = new Image()
  vlieg2.src = "./images/vlieg.png";

  let mier = document.getElementById("mier");
  let mier2 = new Image()
  mier2.src = "./images/mier.png";

  let lief = document.getElementById("lieveheersbeestje");
  let lieve2 = new Image()
  lieve2.src = "./images/lieveheersbeestje.png";


  //ctx.fillStyle = "pink";
  //ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
  // ctx.drawImage(vlieg, vliegX * tileCount, vliegY * tileCount, tileSize, tileSize);
  ctx.drawImage(vlieg2, vliegX * tileCount, vliegY * tileCount, tileSize, tileSize);
  ctx.drawImage(mier2, mierX * tileCount, mierY * tileCount, tileSize, tileSize);
  ctx.drawImage(lieve2, liefX * tileCount, liefY * tileCount, tileSize, tileSize);



  //ctx.drawImage(vlieg);
  //ctx.fillRect(vlieg * appleX, vlieg * appleY, tileSize, tileSize);

}

function checkAppleCollision() {
  if (vliegX === kikkerX && vliegY === kikkerY) {
    vliegX = Math.floor(Math.random() * pos1);
    vliegY = Math.floor(Math.random() * pos1);
    tailLength++;
    score++;
    gulpSound.play();
  } else if (mierX === kikkerX && mierY === kikkerY) {
    mierX = Math.floor(Math.random() * pos2);
    mierY = Math.floor(Math.random() * pos2);
    tailLength++;
    score++;
    gulpSound.play();
  } else if (liefX === kikkerX && liefY === kikkerY) {
    liefX = Math.floor(Math.random() * pos3);
    liefY = Math.floor(Math.random() * pos3);
    tailLength++;
    score++;
    gulpSound.play();
  }

}


let px = 0;

window.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key == "ArrowRight") {

    px = px + speed;

    // kikker.style.left = px + "px";

    inputsXVelocity = 1;
    if (inputsXVelocity == -1) return;
    inputsYVelocity = 0;

  }

  if (event.key == "ArrowLeft") {
    px = px - speed;

    // kikker.style.left = px + "px";

    if (inputsXVelocity == 1) return;
    inputsYVelocity = 0;
    inputsXVelocity = -1;

  }

  if (event.key == "ArrowUp") {
    px = px + speed;

    // kikker.style.bottom = px + "px";

    if (inputsYVelocity == 1) return;
    inputsYVelocity = -1;
    inputsXVelocity = 0;
  }

  if (event.key == "ArrowDown") {
    px = px - speed;

    // kikker.style.bottom = px + "px";
    //83 is s
    if (inputsYVelocity == -1) return;
    inputsYVelocity = 1;
    inputsXVelocity = 0;
  }


})

drawGame();