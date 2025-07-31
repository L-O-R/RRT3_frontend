const btn = document.getElementById("btn");

const para = document.getElementsByTagName("p");
console.log(para);

para[0].addEventListener("mouseenter", clickHandler);

function clickHandler() {
  para[0].innerText = "hello from js";
}
