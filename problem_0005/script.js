function round(number){
    return Math.round(number * 100) / 100
}

let i = 0;
let arr = [];
const divisors = [];

while(i < 10){
    i++
    divisors.push(i)
};

i = 0

console.log(divisors)

while(i > -1){
    i += 2
    for (const divisor in divisors){
        const quocient = round(i / divisors[divisor])
        if (quocient % 1 == 0){
            arr.push(quocient)
        }
    }
    if (arr.length == divisors.length){
        console.log(i);
        break;
    }

    arr = []
}