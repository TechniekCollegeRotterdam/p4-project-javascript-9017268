window.addEventListener("keydown", function (event) {
        console.log(event.key);






                kikker.style.left = px + "px";
        }

        if (event.key == "ArrowUp") {
                px = px + 10;

        }

        if (event.key == "ArrowDown") {
                px = px - 10;

                kikker.style.bottom = px + "px";
        }

        if (event.key == "Enter") {


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
