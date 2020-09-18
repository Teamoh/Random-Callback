# Random-Callback

Request a function execution based on randomness and a given chance.

## Example

```js
import randomCallback from 'randomCallback/src/index';

const callback = function (message) {
    console.log(message);
};

let hasBeenCalled;

hasBeenCalled = randomCallback(callback, 1, 'I will alaways be called'); // logs 'I will be called'
console.log(hasBeenCalled); // true

hasBeenCalled = randomCallback(callback, 0, 'I will never be called'); // logs nothing
console.log(hasBeenCalled); // false

hasBeenCalled = randomCallback(callback, 0.5, 'I will be called in around 50% of calls');
console.log(hasBeenCalled); // true or false

```

## API

### randomCallback(`callback`: Function, `chance`: number, `...args`: any[]): boolean

- `callback` – the function to execute.
- `chance` (optional) – a number between `0` and `1`. Default value is `0.5`.
  A chance of `0` will never execute the function, while a chance of `1` will always execute it. With `0.5` the chance that the function will be executed is 50:50.  
  Numbers smaller than `0` will be treated as `0`, numbers greater than `1` will be treated as `1`.
- All following parameters will be passed as arguments to the function.

If `callback` is not a function or `chance` is not a number a `TypeError` will be thrown.

Returns a boolean which indicates if the function was executed.

## Randomness

Randomness is based on `Math.random()` so don't take it too serious.


