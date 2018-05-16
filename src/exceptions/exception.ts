export const tryCatch = (fn: Function, value: String) => {
    try {
        return fn(value);
    }
    catch(error) {
        return {
            message: 'Something went wrong',
            error
        };
    }
};