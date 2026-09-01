/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray: number[] = [];
    if (numbers.length === 0) {
        numbers;
    } else {
        newArray.push(numbers[0]);
        newArray.push(numbers[numbers.length - 1]);
    }
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const clonedNumbers = [...numbers];
    return clonedNumbers.map((value: number): number => value * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const dupNumbers = [...numbers];
    return dupNumbers.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0,
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const clonedAmounts = [...amounts];
    const defualt: number = 0;
    let removeDollarSign: string[] = clonedAmounts.map(
        (dollar: string): string =>
            dollar[0] === "$" ? dollar.slice(1, dollar.length) : dollar,
    );
    return removeDollarSign.map((money: string): number =>
        parseInt(money) ? parseInt(money) : defualt,
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const clonedMessages = [...messages];
    const noQuestions: string[] = clonedMessages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    return noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const clonedColors = [...colors];
    return clonedColors.every(
        (color: string): boolean =>
            color.toUpperCase() === "RED" ||
            color.toUpperCase() === "GREEN" ||
            color.toUpperCase() === "BLUE",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const dupAddends = [...addends];
    let sum: number = dupAddends.reduce(
        (total: number, num: number): number => (total += num),
    );
    let sumString: string = dupAddends.join("+");
    let statement: string = `${sum.toString()}=${sumString}`;
    return statement;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let dupNums = [...values];
    let finalList = [...values];
    let ifNegative: boolean = dupNums.some(
        (value: number): boolean => value < 0,
    );
    if (dupNums.length === 0) {
        return [0];
    } else if (ifNegative) {
        let negativeIndex: number = dupNums.findIndex(
            (value: number): boolean => value < 0,
        );
        if (negativeIndex === 0) {
            finalList.splice(negativeIndex + 1, 0, 0);
        } else {
            let beforeNegative: number[] = dupNums.splice(0, negativeIndex);
            let sum: number = beforeNegative.reduce(
                (total: number, num: number): number => (total += num),
                0,
            );
            finalList.splice(negativeIndex + 1, 0, sum);
            return finalList;
        }
    } else {
        let totalSum: number = dupNums.reduce(
            (maxTotal: number, val: number): number => (maxTotal += val),
        );
        finalList.push(totalSum);
    }
    return finalList;
}
