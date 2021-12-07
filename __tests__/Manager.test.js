const Manager = require('../lib/Manager.js');

test('creates an employee object and check employee name', () => {
    const employee = new Manager('plain');

    expect(employee.name).toBe('plain');
});


test('creates an employee object and check employee id', () => {
    const employee = new Manager('plainId',124);

    expect(employee.id).toBe(124);
});


test('creates an employee object and check employee email', () => {
    const employee = new Manager('plain', 124, 'plain@email.com');

    expect(employee.email).toBe('plain@email.com');
});

test('creates a Manager office object extension', () => {
    const employee = new Manager('plain', 124, 'plain@email.com','branch 12')
    expect(employee.office).toBe('branch 12');
});