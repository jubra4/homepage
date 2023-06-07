const toogleBackground = () => {
  const body = document.documentElement;
  const nextColorName = document.querySelector(".js-nextColorName");

  body.classList.toggle("body--black");
  nextColorName.innerText = body.classList.contains("dark")
    ? "jasny"
    : "ciemny";
};

const init = () => {
  const changeBackgroundButton = document.querySelector(
    ".js-changeBackgroundButton"
  );
  changeBackgroundButton.addEventListener("click", toogleBackground);

  init();
};
