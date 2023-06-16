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
            console.log(mult)
            arr.push(mult)
        }
    }
    i2 = 99
}

const lastElement = (arr.length) - 1

console.log(parseInt(arr[lastElement]))