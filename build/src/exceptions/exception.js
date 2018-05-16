"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryCatch = (fn, value) => {
    try {
        return fn(value);
    }
    catch (error) {
        return {
            message: 'Something went wrong',
            error
        };
    }
};
