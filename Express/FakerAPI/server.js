const express = require("express");
const app = express();
const faker = require('faker');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
  constructor() {
    this.id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastname = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();


  }


}

class Company {
  constructor() {
    this.id = faker.random.uuid()
    this.name = faker.name.findName();
    this.address = {
      "street": faker.address.streetName(),
      "city": faker.address.city(),
      "state": faker.address.state(),
      "zipCode": faker.address.zipCode(),
      "country": faker.address.country()

    }
  }
}
// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  const firstone = new User();
  res.json(firstone);
});
app.get("/api/companies/new", (req, res) => {
  const company = new Company();
  res.json(company);
});
app.get("/api/user/company", (req, res) => {
  const company = new Company();
  const user = new User();
  res.json({ company, user });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
