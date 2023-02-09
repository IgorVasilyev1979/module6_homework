function func(x) {
    return function(y) {
        console.log(x+y);
    };
};

const resultFunc = func(10);
resultFunc(2);