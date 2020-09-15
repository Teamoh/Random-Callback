# Random-Callback

Execute a callback function or not, based on randomness.

## Example

```js
import randomCallback from 'randomCallback/src/index';

var callback = function () {
    console.log('Callback was called');
};

randomCallback(callback); // logs 'Callback was called'
randomCallback(callback); // nothing
```

## API

### randomCallback(`callback`: Function, `context`: any, `...args`: any[]): boolean

The first parameter `callback` is the callback function which should be executed or not.  
The second parameter `context` defines with which `this` value the callback is called.  
All following parameters will be passed as arguments to the callback function.

If `callback` is not a function a `TypeError` will be thrown.
Randomness is based on `Math.random()` so don't take it too serious.

Returns a boolean which indicates if the callback function was called.

## Why?

Why not?
