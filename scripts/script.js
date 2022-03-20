const incrementBtn = document.getElementById("incbutton");
const counterElement = document.getElementById("counter");

function onIncrement() {
  const value = counterElement.innerHTML;
  counterElement.innerHTML = parseInt(value) + 1;
}

incrementBtn.addEventListener("click", onIncrement);
