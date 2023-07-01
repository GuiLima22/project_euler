import misc from "../misc/misc.js";

function calcFactors(number) {
    let i = 0;
    const numSqrt = Math.round(Math.sqrt(number));
    const arr = [];

    while (i < numSqrt) {
        i++;
        if (number % i == 0) {
            const factor1 = i;
            const factor2 = number / factor1;
            arr.push(factor1, factor2);
        }
    }

    return arr;

}

function findHigherPrimeFactor(number) {
    const arr = calcFactors(number).sort(function (a, b) { return a - b });
    const newArr = [];
    for (const n of arr) {
        if (calcFactors(n).length == 2) {
            newArr.push(n);
        }
    }

    const LastPrime = (newArr.length) - 1;

    return newArr[LastPrime];
}

misc.answer(findHigherPrimeFactor(600851475143));