"use strict";
exports.__esModule = true;
exports.tryCatch = function (fn, value) {
    try {
        return fn(value);
    }
    catch (error) {
        return {
            message: 'Something went wrong',
            error: error
        };
    }
};
