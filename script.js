export function capitalized(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

export function reverse(word) {
    return word.split('').reverse().join('');
}

export const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
}

export function cipher(str, shift) {
    
    return str.split('').map(char => {
        let code = char.charCodeAt();

        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }

        // Non-alphabetical characters remain unchanged
        return char;
    }).join('');
}

export function analyzedArray(arr) {

    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length }
}