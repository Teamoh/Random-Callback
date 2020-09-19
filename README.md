# Random-Callback

Request a function execution based on randomness and a given chance.

## Example

```js
import randomCallback from 'random-callback';

const callback = function (message) {
    console.log(message);
};

let hasBeenCalled;

hasBeenCalled = randomCallback(callback, 1, 'I will be called for sure'); // logs 'I will be called for sure'
console.log(hasBeenCalled); // true

hasBeenCalled = randomCallback(callback, 0, 'I won\'t be called'); // logs nothing
console.log(hasBeenCalled); // false

hasBeenCalled = randomCallback(callback, 0.5, 'I will be called with a chance of 50%');
console.log(hasBeenCalled); // true | false

hasBeenCalled = randomCallback(callback, Math.random(), 'I will be called completly random');
console.log(hasBeenCalled); // true | false

```

## API

### randomCallback(`callback`: Function, `chance`: number, `...args`: any[]): boolean

- `callback` – the function to execute.
- `chance` (optional) – a number between `0` and `1`. Default value is `0.5`.
  A chance of `0` will never execute the function, while a chance of `1` will always execute it. With a chance of `0.5` the function will be executed in around 50% of calls.  
  Numbers smaller than `0` will be treated as `0`, numbers greater than `1` will be treated as `1`.
- All following parameters will be passed as arguments to the function.

If `callback` is not a function or `chance` is not a number a `TypeError` will be thrown.

The callback will always be executed with the global context (`global` in NodeJS environments and `window` in the browser environment).

Returns a boolean which indicates if the function was executed.

## Randomness

Randomness is based on `Math.random()` so don't take it too serious.


