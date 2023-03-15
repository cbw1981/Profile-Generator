const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const manager = new Manager("Bruce Wayne","002","darkknight@example.com","555 555 5555");

test("constructor returns name, id #, email, and phone", () => {
  expect(manager.name).toBe("Bruce Wayne");
  expect(manager.id).toBe("002");
  expect(manager.email).toBe("darkknight@example.com");
  expect(manager.officeNumber).toBe("555 555 5555");
});

test("getOfficeNumber() returns phone", () => {
  expect(manager.getOfficeNumber()).toBe("555 555 5555");
});

test("getRole() returns role of Manager", () => {
  expect(manager.getRole()).toBe("Manager");
});