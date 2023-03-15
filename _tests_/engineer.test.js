const Engineer = require("../lib/Engineer");
const engineer = new Engineer("John Doe","002","JDoe@example.com","jdoe");

test("constructor returns name, id #, email, and github name", () => {
  expect(engineer.name).toBe("John Doe");
  expect(engineer.id).toBe("002");
  expect(engineer.email).toBe("JDoe@example.com");
  expect(engineer.github).toBe("jdoe");
});

test("getGithub() returns Engineer github", () => {
  expect(engineer.getGithub()).toBe("jdoe");
});

test("getRole() returns role of Engineer", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
