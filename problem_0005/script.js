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

console.log(divisors)

i = 0

/*while(i > -1){
    i += 2
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
}*/

for (const divisor in divisors){
    if(2520 % divisors[divisor] != 0){
        let a = false
    }
    else{
        a = true
    }
}

while(a == true){
    
}

arr = []