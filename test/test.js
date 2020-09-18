const randomCallback = require('../src/index');

describe('Random callback', () => {
    test('Executes the callback', () => {
        const callback = jest.fn();

        let hasBeenCalled = false;

        do {
            hasBeenCalled = randomCallback(callback);
        } while (!hasBeenCalled);
        
        expect(callback).toHaveBeenCalled();
    });

    test('Does not execute the callback', () => {
        let hasBeenCalled = true;
        let callback;

        do {
            callback = jest.fn();
            hasBeenCalled = randomCallback(callback);
        } while (hasBeenCalled);

        expect(callback).not.toHaveBeenCalled();
    });

    test('Has boolean return value', () => {
        for (let i = 0; i < 100; i++) {
            const callback = jest.fn();

            expect(
                typeof randomCallback(callback) === 'boolean'
            ).toBeTruthy();
        }
    });

    test('Is executed with given arguments', () => {
        const callback = jest.fn();

        let hasBeenCalled = false;

        do {
            hasBeenCalled = randomCallback(callback, null, 'Hello', 'World');
        } while (!hasBeenCalled);

        expect(callback).toHaveBeenCalledWith('Hello', 'World');
    });
});