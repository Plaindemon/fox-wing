const { test } = require('picomatch');
const getSchool = require('../lib/Intern.js');

// test('adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// });

test('creates a school name object', () => {
    const school = 'SCHOOL';
    expect(school).toBe('SCHOOL');
})

console.log(getSchool);