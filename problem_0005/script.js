function round(number){
    return Math.round(number * 100) / 100
}

let i = 0;
let arr = [];
const divisors = [];

while(i < 20){
    i++
    divisors.push(i)
}

i = 0;

while(true){
    i += 2520
    for (const divisor in divisors){
        const quocient = round(i / divisors[divisor])
        if (quocient % 1 == 0){
            arr.push(quocient)
        }
    }
    if (arr.length == divisors.length){
        break;
    }

    arr = []
}


console.log(i);