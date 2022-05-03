// length, isArray
// push() pop() 뒤쪽에서 추가,삭제 /  shift() unshift() 앞쪽에서 추가,삭제 / splice() slice()
// indexOf() lastIndexOf() includes()
// (callback 미사용) sort() reverse() join()

// 선언 new Array() 혹은 []을 통해 선언 사이즈 혹은 값을 입력하여 초기화 가능
// 접근방법 Array[index] O(1)
// 배열 속성 Array.length 배열 요소의 개수 확인

let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruitsArr = ["apple", "banana", "melon"];
console.log(fruitsArr);
console.log(fruitsArr.length);
console.log(fruitsArr[0]);
console.log(fruitsArr[1]);
console.log(fruitsArr[2]);

fruitsArr[1] = "kiwi";
console.log(fruitsArr[1]);

// 자바스크립트에서 배열은 일반적 배열이 아닌 Hash 기반의 객체
// 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소배열(sparse array)

let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums.length);
console.log(nums);

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length);
console.log(nums);

console.log(Object.getOwnPropertyDescriptors(nums));

// 배열 타입 확인
// Array.isArray()
// 배열 요소 삭제
// delete array[index]

let num = 123.456;
let str = "here i am";
let fruits = ["apple", "banana", "orange"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits));

console.log(fruits);
console.log(fruits.length);

delete fruits[1];
console.log(fruits);
console.log(fruits);
// 삭제해도 빈 요소가 남아있다



// 배열 조작
// 배열 추가/삭제 (LIFO-Back)
// 배열 추가 push pop

fruits = ["apple", "orange", "melon"];
let ret;

ret = fruits.push("watermelon");
console.log(fruits);
console.log(fruits.length);
console.log(ret); // push는 배열의 크기를 반환

ret = fruits.pop();
console.log(fruits);
console.log(fruits.length);
console.log(ret); // pop은 삭제된 데이터를 반환

ret = fruits.unshift("watermelon");
console.log(fruits);
console.log(fruits.length);
console.log(ret); // unshrft는 배열의 크기를 반환

ret = fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log(ret); // shift는 삭제된 데이터를 반환

// 배열 조작2
// 배열 삭제 변경(index)
// splice(index[,deleteCount,elem1,...,elemN])

fruits = ["apple", "orange", "melon"];
ret;

ret = fruits.splice(1);
console.log(ret);
console.log(fruits); // 매개변수 인덱스 이후로 잘라 리턴 

fruits = ["apple", "orange", "melon", "strawberry"];
ret = fruits.splice(1,2); // 1인자에서 2인자의 개수만큼 잘라 리턴
console.log(ret);
console.log(fruits);

ret = fruits.splice(1,1,"mango","kiwi"); // 삭제 후 데이터 추가가 가능
console.log(ret);
console.log(fruits);

// 배열 조작3
// slice(start,end)
// 잘라 리턴하지만 원본은 그대로 놔둠

// 배열 병합
// Array.concat(arg1,arg2);

fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1));
console.log(fruits);

console.log(fruits.slice(1,2));
console.log(fruits.slice(-2));

let add = ["cherry", "banana"];

console.log(fruits.concat(fruits,add)); // 병합해서 반환
console.log(fruits); // 원본은 건드리지 않음



// 배열 반복문
// for.. length(index 접근), for .. of(element 접근), for ... in (key 접근)
for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

for (let fruit of fruits)
{
    console.log(fruit);
}

// key는 인덱스
for(let key in fruits)
{
    console.log(key);
    console.log(fruits[key]);
}



// 배열 탐색 / 변형
// index 탐색(앞에서부터) : Array.indexOf(item, from)
// index 탐색(뒤에서부터) : Array.lastIndexOf(item, from)
// 값 포함 여부 확인 : Array.includes(item,from);
fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange")); // 배열에 해당 요소가 없으면 -1반환
console.log(fruits.indexOf("orange",2)); // 2인자인덱스 이후로 찾는다

console.log(fruits.lastIndexOf("orange"));
console.log(fruits.lastIndexOf("orange",-3));

console.log(fruits.includes("orange")); // 있으면 true반환
console.log(fruits.includes("Banana"));


// 배열 변형
// 배열 정렬 : Array.sor()
// 배열 반전 : Array.reverse()

// 배열 변환
// 배열 값을 문자열로 변환 : Array.join(separator)

nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort()); // 오름차순으로 정렬
console.log(nums.reverse()); // 반전

fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort()); // 유니코드, 아스키 기준으로 정렬
console.log(fruits.reverse());

str = fruits.join();
console.log(str);

let str_separator = fruits.join(";"); // 원하는 문자로 나눌 수 있다
console.log(str_separator);
let result = str_separator.split(";");
console.log(result);