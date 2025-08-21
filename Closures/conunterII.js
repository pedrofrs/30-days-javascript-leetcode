var createCounter = function(init) {
    var fistValue = init;
    var current = init
    return {
        increment: () => ++current,
        decrement: () => current--,
        reset: () =>  current = init
    }

};


const counter = createCounter(0)
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
counter.reset();
