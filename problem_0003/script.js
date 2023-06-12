const a = 10000
let i = 0
let i2 = 0
let arr = []
const newArr = []
const b = 600851475143;


while(i < a){
    i++;
    while(i2 < a){
        i2++;
        if(i % i2 == 0){
            arr.push(i2)
        }
    }
    if(arr.length === 2 && b % arr[1] == 0){
        newArr.push(arr[1])
    }
    i2 = 0
    arr = []
}



console.log(newArr)