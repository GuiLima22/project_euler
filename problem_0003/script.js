function calcFactors(number){
    let i = 0
    const numSqrt = Math.round(Math.sqrt(number))
    const arr = []

    while(i < numSqrt){
        i++
        if(number % i == 0){
            const factor1 = i
            const factor2 = number / factor1
            arr.push(factor1, factor2)
        }
    }
    return arr

}

const arr = calcFactors(600851475143).sort(function(a, b){return a-b})
const newArr = []
for (const n in arr){
    if(calcFactors(arr[n]).length == 2){
        newArr.push(arr[n])
    }
}

const LastPrime = (newArr.length) - 1

console.log(newArr[LastPrime])