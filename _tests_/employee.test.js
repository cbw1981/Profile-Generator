const Employee = require('../lib/employee');
const emp = new Employee("John Smith","001","JSmith@example.com");


test("getName() returns employee name", () => {
    expect(emp.getName()).toBe("John Smith");
});

test("getId() returns employee Id", () => {
    expect(emp.getId()).toBe("001");
});

test("getEmail) returns employee email", () => {
    expect(emp.getEmail()).toBe("JSmith@example.com");
});

test("getRole() returns employee role", () => {
    expect(emp.getRole()).toBe("Employee");
});