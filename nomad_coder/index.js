const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function ainita() {
  title.addEventListener("click", handleClick);
  //title
}

ainita();
