import misc from "../misc/misc.js";

function calcFactors(number) {
    let i = 0;
    const numSqrt = misc.rndSqrt(number);
    const arr = [];

    while (i < numSqrt) {
        i++;
        if (number % i == 0) {
            const factor1 = i;
            const factor2 = number / i;

            if(factor1 == factor2){
                arr.push(factor1);
            }else{
                 arr.push(factor1, factor2);
            }
        }
    }

    return arr.sort(function(a, b){return a-b});
}

function calcPrimeOfPosition(number) {
    let i = 0;
    const primeNumArr = [];


    while (primeNumArr.length < number) {
        i++;
        if (calcFactors(i).length == 2) {
            primeNumArr.push(i);
        }
    }

    const lastNum = primeNumArr.length - 1;

    return primeNumArr[lastNum];
}

misc.answer(calcPrimeOfPosition(10001));