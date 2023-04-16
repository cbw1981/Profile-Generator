const Intern = require("../lib/intern");
const intern = new Intern("Dick Grayson","003","boywonder@example.com","HSC");

test("constructor returns name, id #, email, and school", () => {
  expect(intern.name).toBe("Dick Grayson");
  expect(intern.id).toBe("003");
  expect(intern.email).toBe("boywonder@example.com");
  expect(intern.school).toBe("HSC");
});

test("getSchool() returns intern school", () => {
  expect(intern.getSchool()).toBe("HSC");
});

test("getRole() returns role of Intern", () => {
  expect(intern.getRole()).toBe("Intern");
});