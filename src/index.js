'use strict';

module.exports = function (callback, chance) {
    var random, result, args;

    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }

    if (chance === undefined) {
        // set default chance
        chance = 0.5;
    }

    if (typeof chance !== 'number') {
        throw new TypeError('Chance must be a number');
    }

    // get random number
    random = Math.random();
    result = false;

    if (chance > random) {
        result = true;

        // use global object from NodeJS or window from browser environment as context
        const context = typeof global === 'undefined' ? window : global;
        
        // slice rest arguments and call the callback function
        args = Array.prototype.slice.call(arguments, 2);
        callback.apply(context, args);
    }

    return result;
};
