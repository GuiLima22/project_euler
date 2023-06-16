function reverseString(string){
    const splitString = string.split('');
    const reverseSplit = splitString.reverse();
    const joinArr = reverseSplit.join('');
    return joinArr
}

let i1 = 99
let i2 = 99
const arr = []

while (i1 < 999){
    i1++
    while (i2 < 999){
        i2++
        const mult = (i1 * i2).toString()
        const reverseMult = reverseString(mult)
        if(mult == reverseMult){
            let toNumMult = parseInt(mult)
            if(!arr.includes(toNumMult)){
                arr.push(toNumMult)
            }
        }
    }
    i2 = 99
}

let ascendingArr = arr.sort(function(a, b){return a-b});

const lastElement = (ascendingArr.length) - 1

console.log(ascendingArr)