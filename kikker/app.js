setTimeout(function () {
        alert('game tijd voorbij');
        location.reload(true);
}, 100000);

const nameChanged = function (event) {
        console.log(event);
}

const kikker = document.querySelector(".kikker");


let px = 0;


window.addEventListener("keydown", function (event) {
        console.log(event.key);

        if (event.key == "ArrowRight") {

                px = px + 10;

                kikker.style.left = px + "px";

        }

        if (event.key == "ArrowLeft") {
                px = px - 10;

                kikker.style.left = px + "px";
        }

        if (event.key == "ArrowUp") {
                px = px + 10;

                kikker.style.bottom = px + "px";
        }

        if (event.key == "ArrowDown") {
                px = px - 10;

                kikker.style.bottom = px + "px";
        }

        if (event.key == "Enter") {

                px = px + 50; // als je op enter drukt gaat hij 40 pixels sneller naar rechts

                kikker.style.left = px + "px";
        }

        if (event.key == "Backspace") {

                px = px - 50; //als je  op backspace drukt gaat hij 40 pixels sneller naar links

                kikker.style.left = px + "px";
        }

        if (event.key == "Shift") {

                px = px + 50; //als je op shift drukt gaat hij 40 pixels sneller naar boven

                kikker.style.bottom = px + "px";

        }

        if (event.key == "p") {

                px = px - 50; //als je op "P" drukt gaat hij 40 pixels sneller naar beneden

                kikker.style.bottom = px + "px";

        }

})
