import misc from "../misc/misc.js"


function subsBetweenSquares(range) {
    let i = 0;
    let squareSums = 0;
    let squareOfSum = 0;

    while (i < range) {
        i++;
        squareSums += i ** 2;
        squareOfSum += i;
    }

    return squareOfSum ** 2 - squareSums;
}

misc.answer(subsBetweenSquares(100));