export function strCount1(str: string, letter: string): number {
    let amount = 0;
    for (let char of str) {
        if (letter === char) {
            amount += 1;
        }
    }
    return amount;
}


export function strCount2(str: string, letter: string): number {
    return str.split(letter).length - 1;
}

str_count1("Hello", 'o'); // returns 1
str_count1("Hello", 'l'); // returns 2
str_count1("", 'z'); // returns 0

str_count2("Hello", 'o'); // returns 1
str_count2("Hello", 'l'); // returns 2
str_count2("", 'z'); // returns 0
