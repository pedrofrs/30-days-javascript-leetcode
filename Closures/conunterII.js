// This line declares a function named 'createCounter'. This type of function, 
// which creates and returns another function or object, is often called a "factory function".
// It takes one argument, 'init', which will be the initial value for our counter.
var createCounter = function (init) {

    // Inside the function, we declare a variable 'fistValue'. This seems to be a typo for 'firstValue'
    // and is actually redundant because the 'init' variable is already available within this scope.
    // The code works correctly without this line.
    var fistValue = init;

    // This is the crucial variable. 'current' holds the current state of the counter.
    // It's initialized with the value passed into 'init'. Because this variable is inside the
    // createCounter function's scope, it is "private". It cannot be accessed from outside,
    // except through the methods we are about to return.
    var current = init;

    // The function returns an object. This object acts as the public API (Application Programming Interface)
    // for our counter. It exposes three methods to interact with the 'current' variable.
    return {
        // The 'increment' method is an arrow function. When called, it uses the pre-increment
        // operator (++current) to increase 'current' by 1 and then returns the new value.
        increment: () => ++current,

        // The 'decrement' method uses the post-decrement operator (current--).
        // This is a subtle but important difference: it returns the value of 'current' *before*
        // decrementing it. For example, if 'current' is 2, calling this returns 2, and then 'current' becomes 1.
        decrement: () => current--,

        // The 'reset' method is another arrow function. It sets the 'current' value
        // back to the original 'init' value that was passed in when the counter was created.
        reset: () => current = init
    }
};


// 1. A new counter is created. 
// Inside its closure: init = 0, current = 0.
const counter = createCounter(0);

// 2. counter.increment() is called.
// It increments 'current' to 1 and returns 1.
// State: current = 1
counter.increment();

// 3. counter.increment() is called again.
// It increments 'current' to 2 and returns 2.
// State: current = 2
counter.increment();

// 4. counter.decrement() is called.
// It returns the current value (2) and *then* decrements 'current' to 1.
// State: current = 1
counter.decrement();

// 5. counter.reset() is called.
// It sets 'current' back to the original 'init' value (0) and returns 0.
// State: current = 0
counter.reset();

// 6. counter.reset() is called again.
// It sets 'current' back to 'init' (0) again and returns 0.
// State: current = 0
counter.reset();

