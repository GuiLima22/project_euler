let iteration = 0
let squareSums = 0
let squareOfSum = 0

while (iteration < 100){
    iteration++
    squareSums  += iteration**2
    squareOfSum += iteration
}

console.log(squareOfSum**2 - squareSums)