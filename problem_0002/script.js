function million(x){
    return x*10**6
}

let i = 0;
let f1 = 1;
let f2 = 1;
let sum = 0;
const a = million(4);

while(i < a){
    i = f1 + f2;
    f1 = i - f1;
    f2 = i;
    if (i % 2 == 0 && i < a){
        sum += i;
    }
}

console.log(sum);