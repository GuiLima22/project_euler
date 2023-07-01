class Miscellaneous {

    answer(answer) {
        const div = document.getElementById('main');
        const h3 = document.createElement('h3');
        h3.innerText = `Answer: ${answer}`;

        return div.appendChild(h3);
    }

    toMillion(number) {
        return number * 10 ** 6;
    }

    round(number){
        return Math.round(number * 100) / 100
    }

    rndSqrt(number) {
        return Math.round(Math.sqrt(number));
    }
}

const misc = new Miscellaneous;

export default misc;