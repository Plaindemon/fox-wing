const Manager = require('../lib/Manager.js');

test('creates a Manager office object extension', () => {
    const office = new Manager('branch 12')
    expect(office.name).toBe('branch 12');
});