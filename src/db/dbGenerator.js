const fs = require("fs");

const dateFns = require("date-fns");
const faker = require("faker");
faker.seed(69);

const { carData } = require("./data/carData");
const { userImages } = require("./data/userImages");

const NUMBER_OF_USERS = userImages.length;
const NUMBER_OF_CARS = carData.length;

const userIds = [];
const carIds = [];
const data = { users: [], cars: [], carLeases: [] };

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
    images: carData[i].images.map(
      (image) => `http://192.168.0.107:3000${image}`
    ),
  });
}

for (let i = 0; i < NUMBER_OF_USERS; i++) {
  for (let l = 0; l < faker.random.number({ min: 3, max: 10 }); l++) {
    const startDate = faker.date.past(faker.random.number({ min: 1, max: 10 }));
    const endDate = dateFns.add(startDate, {
      days: faker.random.number({ min: 3, max: 60 }),
    });

    data.carLeases.push({
      id: faker.random.uuid(),
      userId: userIds[i],
      carId: carIds[faker.random.number({ min: 0, max: NUMBER_OF_CARS - 1 })],
      startDate,
      endDate,
    });
  }
}

data.cars = faker.helpers.shuffle(data.cars);

const makesAndModels = data.cars.map(({ id, make, model }) => {
  const makeAndModel = `${make} ${model}`;

  return {
    id,
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
