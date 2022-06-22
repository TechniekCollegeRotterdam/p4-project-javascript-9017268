const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let speed = 200; //dit is de snelheid , eerst was dit 7, dit moet nog veranderen
let tileCount = 30; //dit is de grootte, was eerst 20
let tilecount = 200;
let tileSize = canvas.width / tileCount - 2;
let tileSizeKikker = canvas.width / tilecount - 2;

let kikkerX = 10;
let kikkerY = 10;

let snakeParts = []; //array met snake parts (oftewel een lijstje)
let tailLength = 2;

let appleX = 5;
let appleY = 5;

let inputsXVelocity = 0;
let inputsYVelocity = 0;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

//const gulpSound = new Audio("gulp.mp3"); nieuwe audio vinden en erin zetten

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

  if (score > 5) {
    speed = 9;
  }
  if (score > 10) {
    speed = 11;
  }

  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  console.log(kikkerY);

  if (kikkerX <= 0 || kikkerX > canvas.width) {
    console.log("dit was de muur lul")
    gameOver = true;
  } else if (kikkerY <= 0 || kikkerY > canvas.height) {
    gameOver = true; }


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
      gradient.addColorStop("0", " magenta");
      gradient.addColorStop("0.5", "blue");
      gradient.addColorStop("1.0", "red");
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
  ctx.fillStyle = "rgb(254, 140, 243)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "green";
  //let part = snakeParts[0];
  let img = document.getElementById("kikker");
  //ctx.drawImage(img, part.x, part.y);
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    let parts = part.x;
    let partss = part.y;
    //ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    ctx.drawImage(img, parts, partss, tileCount, tileCount);
    //ctx.drawImage(img);

  }

  snakeParts.push(new SnakePart(kikkerX, kikkerY)); //put an item at the end of the list next to the head
  while (snakeParts.length > tailLength) {
    snakeParts.shift(); // remove the furthet item from the snake parts if have more than our tail size.
  }

  //ctx.fillStyle = 'color';
  //ctx.drawImage(img, 30, 30);
  ctx.fillRect(kikkerX * img, kikkerY * img, tileSizeKikker, tileSizeKikker);
  //ctx.fillRect( img, headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
  kikkerX = kikkerX + xVelocity;
  kikkerY = kikkerY + yVelocity;
}

function drawApple() {
let vlieg = document.getElementById("vlieg");
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
  //ctx.fillRect(vlieg, appleX * tileCount, appleY * tileCount, tileSize, tileSize);
  //ctx.drawImage(vlieg);
}

//function checkAppleCollision() {
//  if (appleX === headX && appleY == headY) {
//    appleX = Math.floor(Math.random() * tileCount);
//    appleY = Math.floor(Math.random() * tileCount);
//    tailLength++;
//    score++;
    //  gulpSound.play();
//  }
//}

function checkAppleCollision() {
  if (appleX === kikkerX && appleY == kikkerY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    //  gulpSound.play();
  }
}

let px = 0;

window.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key == "ArrowRight") {

    px = px + 10;

    kikker.style.left = px + "px";
    //68 is d
    inputsXVelocity = 1;
    if (inputsXVelocity == -1) return;
    inputsYVelocity = 0;

  }

  if (event.key == "ArrowLeft") {
    px = px - 10;

    kikker.style.left = px + "px";
    // 65 is a
    if (inputsXVelocity == 1) return;
    inputsYVelocity = 0;
    inputsXVelocity = -1;

  }

  if (event.key == "ArrowUp") {
    px = px + 10;

    kikker.style.bottom = px + "px";
    //87 is w
    if (inputsYVelocity == 1) return;
    inputsYVelocity = -1;
    inputsXVelocity = 0;
  }

  if (event.key == "ArrowDown") {
    px = px - 10;

    kikker.style.bottom = px + "px";
    //83 is s
    if (inputsYVelocity == -1) return;
    inputsYVelocity = 1;
    inputsXVelocity = 0;
  }


})

drawGame();