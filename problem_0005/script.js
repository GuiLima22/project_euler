function round(number){
    return Math.round(number * 100) / 100
}

let i = 0;
let arr = [];
const divisors = [];

while(i < 20){
    i++
    divisors.push(i)
};

console.log(divisors)

i = 0

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
console.log(arr)
console.log(i)

/*for (const divisor in divisors){
    if(2520 % divisors[divisor] != 0){
        let a = false
    }
    else{
        a = true
    }
}

while(a == true){
    if(){

    }
}

arr = []*/

/*function smallest(valor, divisores){
    for (const i in divisores){
        if (valor % i != 0){
            let a = false
        }
        else{
            a = true
        }
    }
    while (a == true){
        if (smallest(valor, divisores) == false){
            valor++
        }
    }
}

console.log(smallest(0, divisors))

def smallest(valor):
    for i in range(0,21):
        if valor % i != 0:
            a = False
        else:
            a = True
    while a == True:
        if smallest(valor):
            break
            valor += 1*/ 