const debounce = function(fn, time) {
    let timeout;

    return function() {
        let self = this;
        const functionCall = function() {
            return fn.apply(self, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
};

export default debounce