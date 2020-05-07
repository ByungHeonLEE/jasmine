const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function inita() {
  title.addEventListener("click", handleClick);
}

inita();
