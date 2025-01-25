for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

let hobbies = [
  "Playing Badminton",
  "Watching Movies",
  "Playing games",
  "Listening to music",
  "Reading",
  "Photography",
];

let list_of_hobbies = 0;

while (list_of_hobbies < hobbies.length) {
  console.log(`Hobby ${list_of_hobbies + 1}: ${hobbies[list_of_hobbies]}`);
  list_of_hobbies++;
}
