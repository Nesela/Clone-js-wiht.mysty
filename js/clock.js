const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("5초마다나옴");
}


setInterval(sayHello, 5000);
