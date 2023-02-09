function isSimple(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
          return false;
        }
    }
    return true;
};

function isSimpleAndLess1000(x) {
    if (x > 1000) {
        console.log('Данные неверны.')
    } else if (x < 2) {
        console.log(`Число ${x} - ни простое, ни составное.`)
    } else if (isSimple(x)) {
        console.log(`Число ${x} - простое.`)
    } else {
        console.log(`Число ${x} - составное.`)
    }
};

isSimpleAndLess1000(10);
isSimpleAndLess1000(0);
isSimpleAndLess1000(1);
isSimpleAndLess1000(7);
isSimpleAndLess1000(3);