'use strict';

module.exports = function (callback, context) {
    var randomBoolean, ctx, args;

    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }

    randomBoolean = !Math.round(Math.random());

    if (randomBoolean) {
        ctx = context || window;
        args = Array.prototype.slice.call(arguments, 2);
        callback.apply(ctx, args);
    }

    return randomBoolean;
};
