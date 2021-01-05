const fs = require("fs");

const faker = require("faker");
faker.seed(69);

const { carData } = require("./data/carData");
const { userImages } = require("./data/userImages");

const NUMBER_OF_USERS = userImages.length;
const NUMBER_OF_CARS = carData.length;

const userIds = [];
const carIds = [];
const data = { users: [], cars: [] };

for (let i = 0; i < NUMBER_OF_USERS; i++) {
  userIds.push(faker.random.uuid());
}
for (let i = 0; i < NUMBER_OF_CARS; i++) {
  carIds.push(faker.random.uuid());
}

for (let i = 0; i < NUMBER_OF_USERS; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  data.users.push({
    id: userIds[i],
    firstName,
    lastName,
    email: faker.internet.email(firstName, lastName),
    password: "123456",
    avatarUrl: userImages[i],
  });
}
for (let i = 0; i < NUMBER_OF_CARS; i++) {
  data.cars.push({
    id: carIds[i],
    dailyRate: faker.random.number({ min: 500, max: 10000 }),
    available: true,
    ...carData[i],
  });
}

data.cars = faker.helpers.shuffle(data.cars);

function splitCamelCase(word) {
  let output,
    i,
    l,
    capRe = /[A-Z]/;
  if (typeof word !== "string") {
    throw new Error('The "word" parameter must be a string.');
  }
  output = [];
  for (i = 0, l = word.length; i < l; i += 1) {
    if (i === 0) {
      output.push(word[i].toUpperCase());
    } else {
      if (
        i > 0 &&
        capRe.test(word[i]) &&
        !capRe.test(word[i + 1]) &&
        !capRe.test(word[i - 1])
      ) {
        output.push(" ");
      }
      output.push(word[i]);
    }
  }
  return output.join("");
}

const makesAndModels = data.cars.map(({ make, model }) => {
  const makeAndModel = `${make} ${splitCamelCase(model)}`;

  return {
    makeAndModel,
    makeAndModelSplit: makeAndModel.split(""),
  };
});

fs.writeFile(
  "makesAndModels.json",
  JSON.stringify(makesAndModels),
  console.error
);
fs.writeFile("db.json", JSON.stringify(data), console.error);
