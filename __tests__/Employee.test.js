// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
// const { expect } = require('@jest/globals');
// const checkIfEqual = require('../lib/Employee.js');
// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Employee');
// test('adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// // });

// test('adds 2 + 2 to NOT equal 7', () => {
//     expect(functions.add(2, 2)).not.toBe(7);
// });

test('creates an employee object', () => {
    const employee = new Employee[('Plain')];

    expect(employee.name).toBe('Plain');
    // expect(employee.id).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
    //   );

})
// test('creates a employee object', () => {
//     const employee = new Employee('Ben');

//     expect(employee.name).toBe('Ben');
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
//     expect(employee.role).toEqual(expect.any(String));
// })
// test('checks if 10 is equal to 10', () => {
//     expect(checkIfEqual(10, 10).toBe(true))
// });

console.log(new Employee());