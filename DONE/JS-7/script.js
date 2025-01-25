let color = document.getElementById("colorButton");

color.addEventListener("click", function () {
  let random = `#` + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = random;
});
