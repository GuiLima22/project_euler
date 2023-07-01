import misc from "../misc/misc.js";


function findProductOfTriplet(range) {
    let x = 1;
    let y = 1;
    let foundSolution = true;
    let answer;


    while (x < range && foundSolution) {
        x++;
        y = x;
        while (y < range) {
            y++;
            if (Math.sqrt(x ** 2 + y ** 2) == range - (x + y)) {
                answer = (range - (x + y)) * x * y;
                foundSolution = false;
            }
        }
    }

    return answer;
}

misc.answer(findProductOfTriplet(1000));

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