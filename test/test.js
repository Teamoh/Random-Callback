const randomCallback = require('../src/index');

describe('Random callback', () => {
    test('Executes the callback with chance=1', () => {
        const callback = jest.fn();

        randomCallback(callback, 1);

        expect(callback).toHaveBeenCalled();
    });

    test('Does not execute the callback with chance=0', () => {
        const callback = jest.fn();

        randomCallback(callback, 0);

        expect(callback).not.toHaveBeenCalled();
    });

    test('Has boolean return value', () => {
        const callback = jest.fn();

        expect(typeof randomCallback(callback) === 'boolean').toBe(true);
    });

    test('Is executed with given arguments', () => {
        const callback = jest.fn();

        randomCallback(callback, 1, 'Hello', 'World');

        expect(callback).toHaveBeenCalledWith('Hello', 'World');
    });
});