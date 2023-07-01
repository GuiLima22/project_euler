import misc from "../misc/misc.js";

function sumFiboEvenNums(range) {
    let i = 0;
    let f1 = 1;
    let f2 = 1;
    let sum = 0;

    while (i < range) {
        i = f1 + f2;
        f1 = f2;
        f2 = i;
        if (i % 2 == 0 && i < range) {
            sum += i;
        }
    }

    return sum
}

const fourMillion = misc.toMillion(4);

misc.answer(sumFiboEvenNums(fourMillion));