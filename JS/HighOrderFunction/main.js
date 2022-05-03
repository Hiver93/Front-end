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


// forEach()
// 배열 요소 별 콜백 함수 각각에 실행 Array..forEach(function(item,index,array){})
// item: 배열 요소, index: 배열 위치, array: 배열

// use for loop
nums = [1,2,3];
for(let i = 0; i< nums.length; i++)
{
    console.log(nums[i]);
}

nums.forEach(function(i){ 
    console.log(i);
})

// map
// 배열 요소 별 호출 및 결과를 배열로 반환: Array.map(function(item,index,array){})

nums = [1,2,3,4,5];
let use_for_loop = [];

for(let i = 0; i< nums.length; i++)
{
    use_for_loop.push(nums[i]*2);
}
console.log(use_for_loop);

let use_map = nums.map(function (item){
    return item * 2;
});


//find 
// 콜백 함수의 ㅗㅈ건을 만족하는, 단 하나의 값만 반환: Array.find(function(item,index,array){})

let users = [
    {name: 'bob', age: 17, job: false},
    {name: 'alice', age: 20, job: false},
    {name: 'john', age: 27, job: true},
]

let find_job = users.find(function(user){
    return user.job == false;
});

console.log(find_job);

let find_age = users.find(function(user){
    return user.age >= 19;
});
console.log(find_age);

//filter
// find와 달리 모두 반환

let filter_job = users.filter(function(user){
    return user.job == false;
});

console.log(filter_job);

let filter_age = users.filter(function(user){
    return user.age >= 19;
});
console.log(filter_age);


// reduce()
// 요소 별 함수 수행 누적 결과값 반환: Array.reduce(function(accumulator, item, index, array){},initial)
// accumulator: 이전 함수 결과 (initial로 초기값 설정 가능), item: 배열 요소, index: 배열 위치, array: 배열
nums = [1,2,3,4,5];
let call_count = 0;

console.log("result\tvalue\tindex\t");
let sum = nums.reduce(function (accumulator, item, index, array){
    console.log(accumulator,"\t\t",item,"\t\t",index);
    call_count++;
    return accumulator+item;
},0);
console.log(call_count);
console.log(sum);