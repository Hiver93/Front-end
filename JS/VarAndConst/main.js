// 변수
// let 변경 가능한 값을 젖아하기 위한 기억 공간
// 중복선언 불가능

let a = 123;
console.log(a);

a = 456;
console.log(a);

// 상수
//const 변경 불가능한 값을 저장하기 위한 기억 공간
// 중복선언 불가능
// 보통 대문자로 이름을 작성
const B = 123;
console.log(B);

// 값 재할당 불가
//b = 456;

// 선언과 동시에 초기화하여야 함
// const c;
// c = 123;


let hi;
hi = "Hello";

let halo = "Hallo";

// 한줄에 여러 변수 선언 초기화 가능
let name = "jim", age = 11; msg = "hello";


// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "2020.2.3"

console.log(age);
console.log(BIRTHDAY);



//Hosting
// 코드에 선언된 변수 및 함수를 유효한 범위의 코드상단으로 끌어 올리는 작업
// var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지않음
// let/const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않음

// 이상황에서 name1은 제일 위에서 선언이 되고 할당은 두번째 출력 전에 된다.
console.log(name1);
var name1 = "john";
console.log(name1);

console.log(name3);
let name3 = "asd";