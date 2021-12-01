
const Intern = require('../lib/Intern.js');


test('creates a school name object', () => {
    const school = new Intern('UofU');
    expect(school.name).toBe('UofU');
})
