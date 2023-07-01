import misc from "../misc/misc.js";

function primesSumBelow(number) {
    let x = 1;
    let y = 0;
    let arr = [];
    let sum = 0;

    while (x < misc.toMillion(number)) {
        x++;
        while (y < Math.round(Math.sqrt(x))) {
            y++;
            if (x % y == 0) {
                arr.push(y, x / y);
            }
        }
        if (arr.length == 2) {
            sum += arr[1];
        }
        y = 0;
        arr = [];
    }

    return sum;
}

misc.answer(primesSumBelow(2))