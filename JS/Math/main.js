// 표준 Built-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공
// math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적 Math.function()으로 호출
// 오일러 상수(e) : Math.E
// PI(파이) : Math.PI
// 절대값 : Math.abs(x)
// 최대값 : Math.max(x)
// 최소값 : Math.min(x)
// 랜덤 난수 값 : Math.random()
// 제곱과 제곱근: Math.pow(x,y), Math.sqrt(x)
// 소수점 처리 : Math.round(x), Math.ceil(x), Math.floor(x)


// 최대값 : Math.max(...x), 최소값 : Math.min(...x), 절대값.abs(x)
// 배열을 인수로 받아 최대/최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필요

console.log(Math.max(1, -1));
console.log(Math.min(1,-1));
console.log(Math.max(1,-1,5,23,4,17));
console.log(Math.min(1,-1,5,23,-4,17));

let nums = [1, -1, 5, 23, 17, -4];
console.log(Math.max(nums)); // 인자로 value만 받음
//apply
console.log(Math.max.apply(null,nums)); // 인자로 value만 받음
console.log(Math.min.apply(null,nums)); // 인자로 value만 받음
//spread
console.log(Math.max(...nums)); // 스프레드 문법
console.log(Math.min(...nums)); // 스프레드 문법
// abs 절대값
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity));

// property
console.log(Math.E); // 오일러 상수
console.log(Math.PI); // 파이

// Random
console.log(Math.random());// 0~1의 수가 나옴
for(let i = 0; i < 10; i++){
    console.log(Number.parseInt(Math.random()*10));
}


// 제곱 / 제곱근 / 소수점 처리
// 제곱 Math.pow(x,y) 제곱근 Math.sqrt(x)
// 소수점 이하 반올림 정수 Math.round(x)
// 소수점 이하 올림 Math.ceil(x) 소수점 이하 내림 Math.floor(x)

// pow
console.log(Math.pow(2,3));
console.log(2**3);
// sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(2));

// round, ceil, floor
console.log(Math.round(3.5));
console.log(Math.round(-2.3));
console.log(Math.round(-3.7));

console.log(Math.ceil(3.5));
console.log(Math.ceil(-2.3));
console.log(Math.ceil(-2.7));

console.log(Math.floor(3.7));
console.log(Math.floor(-2.7));
console.log(Math.floor(-2.7));
