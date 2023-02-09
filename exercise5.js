const pow = (x, n) => {
    let result = x;
    for (i = 0; i < (n - 1);i++) {
        result *= x;
    }
    return result;
};

console.log(pow(3, 3));