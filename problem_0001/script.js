let i = 0
let s = 0

while (i < 999){
    i++
    if (i % 5 == 0 || i % 3 == 0){
        s += i
    }
}

console.log(s);