function rndSqrt(number) {
    return Math.round(Math.sqrt(number));
}

function calcFactors(number) {
    let i = 0;
    const numSqrt = rndSqrt(number);
    const arr = [];

    while (i < numSqrt) {
        i++;
        if (number % i == 0) {
            const factor1 = i;
            const factor2 = number / i;

            arr.push(factor1, factor2);
        }
    }

    return arr
}

function calcPrimeOfPosition(number) {
    let i = 0;
    const primeNumsArr = [];
    const desiredNum = number;
    const maxNum = desiredNum + 1;


    while (primeNumsArr.length < maxNum) {
        i++;
        if (calcFactors(i).length == 2) {
            primeNumsArr.push(i);
        }
    }

    const lastNum = primeNumsArr.length - 1;

    return console.log(primeNumsArr[lastNum]);
}

calcPrimeOfPosition(10001);