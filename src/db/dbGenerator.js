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

fs.writeFile("db.json", JSON.stringify(data), console.error);
