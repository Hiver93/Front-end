// primitive type
// boolean null undefined number string symbol
// undefined: 선언 후 값을 할당하지 않은 변수
// number: 2의 53승까지 표현된다.
// symbol: 문자열과 함꼐 객체 property로 사용, ES6에 추가

// object type
// 두개 이상의 복잡한 개체 저장 가능


// typeof 연산자
// 인수의 자료형을 반환하는 연산자
// 연산자인 typedof x와 함수인 typeof(x)로 문법 지원

let str = "hello world!";
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 345n);
console.log(typeof 123.323);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);


//boolean
console.log("boolean--------------");

let name_check = true;
let age_check = false;

let value_check = 10 > 3;
console.log(value_check);


//null
// 존재하지 않는 , 비어있는, 알수 없는 값을 나타내는데 사용
console.log("null-------------------")
console.log(typeof null); // output: object <  하위 버전 호환성으로 object 표기
const null_check = null;
console.log(null_check === null);

// number
// 관련된 연산으로 사칙연산
// 일반적인 숫자 외에 Infinity, -Infinity, NaN(Not a Number) 특수 숫자 값이 포함
// number에서는 2의 54승 -1 보다 큰값을 사용할 수 없고, 더큰정수는 bigint자료형이 필요

console.log("number-----------------------");
let num1 = 123.0;
let num2 = 123.45;
let num3 = 1/0;
console.log(num1 - num2); // 부동소수점사용으로 정확한 계산이 되지 않고 math를 이용해서 좀더 정확하게 가능
console.log((num1 - num2).toFixed(3));
console.log(num3);
console.log(num1/"hello");


// string 
// 문자, 문자열을 표현하는 자료형
// 큰따옴표, 작은따옴표
// 역 따홈표(백틱, backtick)``
console.log("string-----------------");
let str1 = "hello";
let str2 = "hello";

let num = 3;
let str3 = `hello_${num}`;

console.log(str3);

