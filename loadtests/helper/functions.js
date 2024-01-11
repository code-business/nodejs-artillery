const { faker } = require("@faker-js/faker");

function setJSONBody(req, context, ee, next) {
  req.json.user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };

  return next();
}

module.exports = {
  setJSONBody,
};
