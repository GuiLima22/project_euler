let x = 1;
let y = 0;
let arr = [];
let sum = 0

function toMillion(number){
    return number*10**6
}

while (x < toMillion(2)) {
    x++;
    while (y < Math.round(Math.sqrt(x))) {
        y++;
        if (x % y == 0) {
            arr.push(y, x / y);
        }
    }
    if (arr.length == 2) {
        sum += arr[1];
    }
    y = 0;
    arr = [];
}

console.log(sum);