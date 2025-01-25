function checkAge() {
  const age = document.getElementById("ageInput").value;
  console.log(checkAge);

  let result;

  if (age < 0 || isNaN(age) || age == "") {
    result = " Invalid age. Please put positve integers only.";
  } else if (age >= 0 && age <= 12) {
    result = "Child";
  } else if (age >= 13 && age <= 19) {
    result = "Teenager";
  } else if (age >= 20) {
    result = "Adult";
  }

  document.getElementById("result").innerText = result;
}
