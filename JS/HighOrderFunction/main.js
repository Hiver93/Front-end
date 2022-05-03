// 하나이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
// 매개변수로 전달되는 함수는 콜백함수(Callback funtion)

// 대표 배열 조작 메서드
// 임의 정렬 sort(callback)
// 반복 작업 forEach()
// 콜백함수 결과 배열 반환 map()
// 조건 만족하는 하나의 값 반환 find()
// 조건 만족하는 값 배열로 반환 filter()
// 누적 결과 값 반환 reduce()


// sort()
// 문제점: 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
// 원인: sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생
let nums = [1,-1,4,0,2,3,10,20,12];
console.log(nums.sort());
console.log(nums.reverse());

// 한계점: 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬
let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort());

let asscending_order = function (x,y){
    return x-y; // 0보다 큰값이 반환되면 두값이 바뀜
}
let descending_order = function (x,y){
    return y-x; // 0보다 큰값이 반환되면 두값이 바뀜
}

console.log(nums.sort(asscending_order));
console.log(nums.sort(descending_order));

let asscending_str = function (x,y){
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x>y)return 1;
    else if(x<y) return -1;
    else return 0;
}

let descending_str = function (x,y){
    x = x.toUpperCase();
    y = y.toUpperCase();

    if(x<y)return 1;
    else if(x>y) return -1;
    else return 0;
}

console.log(fruits.sort(asscending_str));
console.log(fruits.sort(descending_str));

// 공용 콜백함수
let asscendingOrder = function ( x, y){
    if(typeof x === "string")
    x = x.toUpperCase();
    if(typeof y === "string")
    y = y.toUpperCase();
    return x > y ? 1 : -1;
}

let descendingOrder = function ( x, y){
    if(typeof x === "string")
    x = x.toUpperCase();
    if(typeof y === "string")
    y = y.toUpperCase();
    return x < y ? 1 : -1;
}

console.log(nums.sort(asscendingOrder));
console.log(nums.sort(descendingOrder));

console.log(fruits.sort(descendingOrder));
console.log(fruits.sort(asscendingOrder));