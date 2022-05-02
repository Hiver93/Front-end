//  지수 표기법(Exponential notation)
let billion = 1e9;
let us = 1e-6; // micro sec, 왼쪽으로 소수점 6번 이동

// 0x 0o 0b 지수 표기

console.log(us.toString());
console.log(typeof us.toString());
console.log(typeof String(us));
console.log(typeof(us+""));

let num1 = 125.0;
let num2 = 123.456;
console.log(num1 - num2);
console.log((num1 - num2).toFixed(3));
console.log((num1-num2).toPrecision(3));//소수점 앞자리도 포함하여 세다
// Number.MAX_VALUE
// Number.MIN_VALUE

// us.toString();

// us.toFixed();

// us.isNaN();
// us.

console.log(Number.isNaN(0.123)); // 정상숫자가 아닌지 확인
console.log(Number.isNaN(123/"hello"));
console.log(Number.isFinite(-123)); // 유한수인지 확인
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite("hello"));

console.log(Number.parseInt("125px"));
console.log(parseInt("125px"));
console.log(Number.parseFloat("1.25em"));
console.log(typeof parseFloat("1.25em"));