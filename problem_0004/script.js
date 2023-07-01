import misc from "../misc/misc.js";

function reverseString(string) {
    const splitString = string.split('');
    const reverseSplit = splitString.reverse();
    const joinArr = reverseSplit.join('');

    return joinArr
}

function findHigherPalindromeUntil(number) {
    const a = ((number - 9) / 10);
    let x = a;
    let y = a;
    let higher = 0;

    while (x < number) {
        x++;
        while (y < number) {
            y++;
            const mult = (x * y).toString();
            const reverseMult = reverseString(mult);
            if (mult == reverseMult) {
                const toNumMult = Number(mult);
                if(toNumMult > higher){
                    higher = toNumMult;
                }
            }
        }
        y = a;
    }

    return higher;
}

misc.answer(findHigherPalindromeUntil(999));