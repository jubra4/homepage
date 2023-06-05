let header__button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

header__button.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});