const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const index = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(index(1, 2).toBe(3));
});