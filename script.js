const hamburgerIcon = document.getElementById("hamburgerIcon");
const navUl = document.getElementById("navUl");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
let state = "close";
hamburgerIcon.addEventListener("click", () => {
  if (state == "close") {
    navUl.style.transform = "translate(0%)";
    line2.style.display = "none";
    line1.style.marginTop = "0px";
    line3.style.marginTop = "0px";
    line1.style.transform = "rotate(45deg)";
    line3.style.transform = "rotate(-45deg)";
    state = "open";
  } else if (state == "open") {
    navUl.style.transform = "translate(100%)";
    line2.style.display = "block";
    line1.style.marginTop = "0px";
    line3.style.marginTop = "5px";
    line1.style.transform = "rotate(0deg)";
    line3.style.transform = "rotate(0deg)";
    state = "close";
  }
  console.log(state);
});
