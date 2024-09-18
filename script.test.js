import expect from 'expect';
import { capitalized, reverse, calculator, cipher, analyzedArray } from './script';

test('Capitalized Words', () => {
    expect(capitalized("tEst")).toBe("Test");
})

test('Reverse String', () => {
    expect(reverse("testas")).toBe("satset");
})

test('Calculator', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.substract(2, 1)).toBe(1);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.multiply(2, 2)).toBe(4);
})

test('Caesar Cipher', ()=> {
    expect(cipher("HOLA", 3)).toBe("KROD");
})


const arry = analyzedArray([1,8,3,4,2,6]);

test('Analyzed Array', () => {
    expect(arry.average).toBe(4);
    expect(arry.min).toBe(1);
    expect(arry.max).toBe(8);
    expect(arry.length).toBe(6);
})