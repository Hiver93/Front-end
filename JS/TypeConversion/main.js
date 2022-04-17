// 형변환

console.log(String(1/0));
console.log(String(123));
console.log(String(-1/0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String("haha"));

// Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로 정수 혹은 실수의 명시적 변환은 parse 함수 사용
// 정수 변환: parseInt(), 실수 변환: parseFloat()
console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

console.log(parseInt("123.123"));
console.log(parseFloat("123.123"));

// Boolean
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("hi"));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));