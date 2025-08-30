/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

   let outputArray = [];

    for (let i = 0; i < arr.length; i++) {
        if ( fn(arr[i], i )){ // callback function. We only need to know the return of the "fn" function, not what the function will do
            outputArray.push(arr[i]);
        }
    }
    return outputArray;
};

