let a = 1
let b = 1
const max = 1000

while(a < max){
    a++;
    b = a;
    while(b < max){
        b++;
        if(Math.sqrt(a**2 + b** 2) == max - a - b){
            console.log((max - a - b) * a * b);
            break;
        }
    }
    if(Math.sqrt(a**2 + b** 2) == max - a - b){
        break;
    }
}

// let c = 1

// while(a < 1000){
//     a++;
//     b = a;
//     c = b;
//     while (b < 1000) {
//         b++;
//         c = b;
//         while (c < 1000){
//             c++;
//             if (a**2 + b**2 == c**2 && a + b + c == 1000) {
//                 console.log(a*b*c);
//                 break;
//             }
//         }
//         if (a**2 + b**2 == c**2 && a + b + c == 1000) {
//             break;
//         }
//     }
//     if (a**2 + b**2 == c**2 && a + b + c == 1000) {
//         break;
//     }
// }