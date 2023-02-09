function evenOddZeroFind() {
   let evenCounter = 0;
    let oddCounter = 0;
    let zeroCounter = 0;
    arr.forEach(function(item) {
        if (typeof item == "number" && isNaN(item) == false && isFinite(item) == true) {
            if (item == 0) {
                zeroCounter++;
            } else if (item % 2 == 0) {
                evenCounter++;
            } else {
                oddCounter++;
            }
        }
    });
    console.log("Чётных элементов: " + evenCounter);
    console.log("Нечётных элементов: " + oddCounter);
    console.log("Нулевых элементов: " + zeroCounter); 
}

let arr = [1, 7, 3, 5, NaN, 0, 3, 8, Infinity];
evenOddZeroFind();
