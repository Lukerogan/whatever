const d = new Date();
// let hour = d.getHours();
let hour = 20
let greetingText = document.getElementById("greeting-text");

if (hour < 12) {
    // if hour is less than 12pm
    greetingText.textContent = "Good Morning!";
    document.querySelector(".solarnlunarmass").classList.add("morning-bg");
    document.querySelector(".lunarbody").classList.add("sun");
    // document.querySelector(".night").classList.add("d-none");
    // document.querySelector(".moon").classList.add("d-none");
    // document.querySelector(".afternoon").classList.add("d-none");
    // document.querySelector(".noon-sun").classList.add("d-none");
  } else if (hour < 17) {
    // if hour is less than 17:00 (but greater than 12pm)
    greetingText.textContent = "Good Afternoon!";
    document.querySelector(".solarnlunarmass").classList.add("noon-bg");
    document.querySelector(".lunarbody").classList.add("noon-sun");
    // document.querySelector(".morning").classList.add("d-none");
    // document.querySelector(".sun").classList.add("d-none");
    // document.querySelector(".night").classList.add("d-none");
    // document.querySelector(".moon").classList.add("d-none");
  } // hour is greater than 17:00
  else {
    greetingText.textContent = "Good Night!";
    document.querySelector(".solarnlunarmass").classList.add("night-gradient");
    document.querySelector(".lunarbody").classList.add("moon");
    // document.querySelector(".morning").classList.add("d-none");
    // document.querySelector(".sun").classList.add("d-none");
    // document.querySelector(".afternoon").classList.add("d-none");
    // document.querySelector(".noon-sun").classList.add("d-none");
  }
  