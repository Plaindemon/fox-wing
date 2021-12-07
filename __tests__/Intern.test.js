
const Intern = require('../lib/Intern.js');

test('creates an employee object and check employee name', () => {
    const employee = new Intern('plain');

    expect(employee.name).toBe('plain');
});


test('creates an employee object and check employee id', () => {
    const employee = new Intern('plainId',124);

    expect(employee.id).toBe(124);
});


test('creates an employee object and check employee email', () => {
    const employee = new Intern('plain', 124, 'plain@email.com');

    expect(employee.email).toBe('plain@email.com');
});

test('creates a school name object and extend the employee ', () => {
    const employee = new Intern('plain', 124, 'plain@email.com', 'UofU');
    expect(employee.school).toBe('UofU');
})
