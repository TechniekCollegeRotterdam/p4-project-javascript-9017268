setTimeout(function () {alert('game tijd voorbij'); location.reload(true);}, 5000);

const nameChanged = function (event) {
        console.log(event);
}

const kikker = document.querySelector(".kikker");

let px = 0;

addEventListener("click", function () {
       px = px + 50;

       kikker.style.left = px + "px";


       //console.log("geklikt");
})



window.addEventListener("keydown", function (event) {
        console.log(event.key);

        if (event.key == "ArrowRight") {
                px = px + 20;

                kikker.style.left = px + "px";
                kikker.src = "images/kikker.png";

        }

        if (event.key == "ArrowLeft") {
                px = px - 20;

                kikker.style.left = px + "px";
                kikker.src = "images/kikker.png";
        }

        if (event.key == "ArrowUp") {
                px = px + 20;

                kikker.style.bottom = px + "px";
                kikker.src = "images/kikker.png";
        }

        if (event.key == "ArrowDown") {
                px= px - 20;

                kikker.style.bottom = px + "px";
                kikker.src = "images/kikker.png";
        }

})


function random_food(min, max)
{  
   return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}
 
  //function change_direction moet je veranderen!!
function change_direction(event) 
{  
   const LEFT_KEY = 37;
   const RIGHT_KEY = 39;
   const UP_KEY = 38;
   const DOWN_KEY = 40;
 
   const keyPressed = event.keyCode;
   const goingUp = dy === -10;
   const goingDown = dy === 10;
   const goingRight = dx === 10;  
   const goingLeft = dx === -10;
 

   //if keypressed moet je veranderen!!
     if (keyPressed === LEFT_KEY && !goingRight)
     {    
          dx = -10;
          dy = 0;  
     }
 
     if (keyPressed === UP_KEY && !goingDown)
     {    
          dx = 0;
          dy = -10;
     }
 
     if (keyPressed === RIGHT_KEY && !goingLeft)
     {    
          dx = 10;
          dy = 0;
     }
 
     if (keyPressed === DOWN_KEY && !goingUp)
     {    
          dx = 0;
          dy = 10;
     }
}