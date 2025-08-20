/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    return {
        toBe : (secondVar) => {
            if (val === secondVar){
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe : (secondVar) => {
            if (val === secondVar){
                throw new Error("Equal");
            }
            return true;
        }
    }

};




expect(5).toBe(5); // true
expect(5).notToBe(5); // throws Equal
