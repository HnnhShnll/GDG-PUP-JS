let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

function getDescription(carObject) {
  return `This car is a ${carObject.year} ${carObject.make} ${carObject.model}.`;
}

let carDescription = getDescription(car);
console.log(carDescription);
