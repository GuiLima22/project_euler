import misc from "../misc/misc.js";


function findDividendUntil(range) {
    let i = 0;
    let arr = [];
    const divisors = [];

    while (i < range) {
        i++
        divisors.push(i);
    }

    i = 0;

    while (true) {
        i += 2520;
        for (const divisor of divisors) {
            const quocient = misc.round(i / divisor);
            if (quocient % 1 == 0) {
                arr.push(quocient);
            }
        }
        if (arr.length == divisors.length) {
            break;
        }

        arr = [];
    }

    return i;
}

misc.answer(findDividendUntil(20));