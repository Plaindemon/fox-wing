const Engineer = require('../lib/Engineer.js');


test('creates an employee object and check employee name', () => {
    const employee = new Engineer('plain');

    expect(employee.name).toBe('plain');
});


test('creates an employee object and check employee id', () => {
    const employee = new Engineer('plainId',124);

    expect(employee.id).toBe(124);
});


test('creates an employee object and check employee email', () => {
    const employee = new Engineer('plain', 124, 'plain@email.com');

    expect(employee.email).toBe('plain@email.com');
});

test('creates an engineer object to extend the employee object', () => {
    const engineer = new Engineer('plain', 124, 'plain@email.com','github');

    expect(engineer.github).toBe('github');

});