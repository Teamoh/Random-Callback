'use strict';

var randomCallback = (function () {
    return function (callback) {
        var randomBoolean;
    
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
    
        randomBoolean = !Math.round(Math.random());
    
        if (randomBoolean) {
            callback();
        }
    
        return randomBoolean;
    };
})();
