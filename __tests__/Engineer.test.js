const Engineer = require('../lib/Engineer.js');


test('creates an engineer object', () => {
    const engineer = new Engineer('github');

    expect(engineer.name).toBe('github');

});