/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const Celsius: number = ((temperature - 32) * 5) / 9;
    return Celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    const array: number[] = [first, second, third];
    let total: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            total += array[i];
        }
    }
    return total;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let uppercaseMessage: string = message.toUpperCase();
    return (uppercaseMessage += "!");
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let messageLength: number = message.length - 1;
    if (message[messageLength] === "?") {
        return true;
    }
    return false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toUpperCase() === "YES") {
        return true;
    } else if (word.toUpperCase() === "NO") {
        return false;
    }

    return null;
}
