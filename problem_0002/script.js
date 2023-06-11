let i = 0
let s = 0
let f1 = 1
let f2 = 2

console.log(f1)
console.log(f2)

while(i < 10){
    s = f1 + f2
    f1 = s - f2
    f2 = s
    i++
    console.log(s);
}