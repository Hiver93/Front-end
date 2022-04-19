// 함수는 다수의 명령문을 코드 불록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합
// 함수는 정의 부분과 호출 부분ㅇ로 구성
// 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내 작성을 권장

// function add (x, y){
//    return x + y;
//}
// add(10,20);

// 1.함수 선언식
// function add(x,y) {
//     return x+y;
// }

// 2. 함수 표현식(Function Expressions)
/*const func = function (arg1, arg2, ... argN){
    expression;
}
*/
// const add = function(x,y){
//     return x+y;
// }

// 3. 화살표 함수 (Arrow Function)
/*const func = (arg1,arg2,...argN) => expression;
*/
const add = (x,y) => x + y;



// 함수 호출
// 자바스크립트 함수는 매개변수와 인수의 ㄱ수가 일치하는지 확인하지 않음

// 1. default value
function print_add(x, y = 10){
    console.log(x+y);
}
print_add(10,20,30); // output 30
print_add(10, 20); // output 30
print_add(10); // output 20

// 2. dynamic parameters
function print_min(){
    console.log(arguments[0] - arguments[1]);
}
print_min(10,20,30); // output -10
print_min(10,20); // output -10
print_min(10); // output NaN
print_min(); //output NaN