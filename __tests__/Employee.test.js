const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('plain');

    expect(employee.name).toBe('plain');
});

console.log(new Employee());