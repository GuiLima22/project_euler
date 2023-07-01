import misc from "../misc/misc.js";

function sumMultiples(mult1, mult2, range) {
    let i = 0;
    let s = 0;
    const below = range - 1;

    while (i < below) {
        i++;
        if (i % mult1 == 0 || i % mult2 == 0) {
            s += i;
        }
    }

    return s;
}

misc.answer(sumMultiples(3, 5, 1000));