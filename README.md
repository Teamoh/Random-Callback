# Random-Callback
Execute a callback function or not.

## Example

```js
var callback = function () {
    console.log('Callback was called');
};

randomCallback(callback); // logs 'Callback was called'
randomCallback(callback); // nothing
```

## API

### randomCallback(callback)

Takes a callback function and executes it or not. If `callback` is not a function a `TypeError` will be thrown.
Randomness is based on `Math.random()` so don't take it too serious.

