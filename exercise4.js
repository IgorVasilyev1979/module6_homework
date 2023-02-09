const printNumbers = function(value1, value2) {
    let num = value1;
    const cbfunc = function() {
        console.log(num);
        num++;
        if (num > value2) {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(cbfunc, 1000);
};

printNumbers(5, 15);