const buttonsubtract = document.querySelector("#buttonsubtract");
const buttonadd = document.querySelector("#buttonadd");
const countertext = document.querySelector("#countertext");

let counterVal = 0;

buttonadd.onclick = function () {
  counterVal++;
  countertext.textContent = counterVal;
};

buttonsubtract.onclick = function () {
  counterVal--;
  countertext.textContent = counterVal;
};
