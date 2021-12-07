const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Employee');

test('creates an employee object and check employee name', () => {
    const employee = new Employee('plain');

    expect(employee.name).toBe('plain');
});


test('creates an employee object and check employee id', () => {
    const employee = new Employee('plainId',124);

    expect(employee.id).toBe(124);
});


test('creates an employee object and check employee email', () => {
    const employee = new Employee('plain', 124, 'plain@email.com');

    expect(employee.email).toBe('plain@email.com');
});

console.log(new Employee());