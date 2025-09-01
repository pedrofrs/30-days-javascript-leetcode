/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {

        for ( const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }

    // other solution:
    /**
     const fn = (acc, f) => f(acc);
    return function(x) {
        return functions.reduceRight(fn, x)
    }
    The reduceRight() method of Array instances    applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
     */

};


const fn = compose([x => x + 1, x => 2 * x])
console.log( fn(4)) // 9



