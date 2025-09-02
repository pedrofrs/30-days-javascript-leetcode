/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // A flag to track whether fn has already been called
    let wasCalled = false;

    // A variable to store the result of the first call
    let result;

    // Return a new function that wraps around fn
    return function(...args) {  // <-- "...args" gathers all arguments into an array
        if (!wasCalled) {
            // Call fn for the first time with the provided arguments
            result = fn(...args);

            // Mark that fn has already been executed once
            wasCalled = true;

            // Return the result from the first execution
            return result;
        }

        // On subsequent calls, do NOT call fn again
        // Just return undefined (could also return 'result' depending on design)
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
