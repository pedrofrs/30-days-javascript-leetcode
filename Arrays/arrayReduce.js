/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Handles the edge case of an empty array.
    // If the array is empty, the initial value is returned directly.
    if (nums.length === 0){
        return init;
    }

    // Calls the native `reduce` method on the array.
    // The first argument is the `fn` callback function itself (passed as a reference).
    // The second argument is the `init` value, which serves as the starting point for the accumulator.
    return nums.reduce(fn, init);
};

nums =
[1,2,3,4]

fn =
function sum(accum, curr) {
    return  accum + curr * curr; }

init =
100

console.log( reduce(nums, fn, init))
