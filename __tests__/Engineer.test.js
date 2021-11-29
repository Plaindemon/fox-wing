const functions = require('../lib/Engineer.js');

test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('creates an engineer role object', () => {
    const employee = new Role('Engineer');

    expect(employee.role).toBe('Engineer');

})