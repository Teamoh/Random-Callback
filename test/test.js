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

        do {
            const callback = jest.fn();
            hasBeenCalled = randomCallback(callback);

            if (!hasBeenCalled) {
                expect(callback).not.toHaveBeenCalled();
            }
        } while (hasBeenCalled);
    });

    test('Has boolean return value', () => {
        for (let i = 0; i < 100; i++) {
            const callback = jest.fn();

            expect(
                typeof randomCallback(callback) === 'boolean'
            ).toBeTruthy();
        }
    });

    test('Is executed with arguments', () => {
        const callback = jest.fn();

        let hasBeenCalled = false;

        do {
            hasBeenCalled = randomCallback(callback, null, 'Hello', 'World');

            if (hasBeenCalled) {
                expect(callback).toHaveBeenCalledWith('Hello', 'World');
            }
        } while (!hasBeenCalled);
    });
});