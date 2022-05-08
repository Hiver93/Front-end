// Map
// 다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장 가능한 Collection
// Map은 Object 대비 다양한 key의 사용을 허용, 값의 추가/삭제 시 메서드를 통해 수행이 필요
// 속성 메서드
// new Map()
// Map.size
// Map.set(key,value)
// Map.get(key)
// Map.delete(key)
// Map.clear()
// Map.has(key)
// Map.keys(), Map.values(), Map.entires()

let map = new Map();
map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");
console.log(map);

console.log(map.get(123));
console.log(map.get("name"));
console.log(map.get(true));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);

map.set(123, 789).set(false, "bool_type").set("fruit", "banana"); // 맵을 반환한다
console.log(map);

// Map 반복문
// iterator 속성을 가짐
let recipe_juice = new Map([
    ["strawberry",50],
    ["banana", 100],
    ["ice",150],
])
console.log("keys aaaaaaaaaaaaaaa")
for(let item of recipe_juice.keys()){
    console.log(item);
}
for(let amount of recipe_juice.values()){
    console.log(amount);
}

for(let entity of recipe_juice){
    console.log(entity);
}

// Map Object 변환

console.log(recipe_juice);

let recipe_juice_obj = Object.fromEntries(recipe_juice); // object로 벼환
console.log(recipe_juice_obj);
let recipe_juice_kv = Object.entries(recipe_juice_obj); // key value로 변환
console.log(recipe_juice_kv);
let recipe_juice_map = new Map(recipe_juice_kv);
console.log(recipe_juice_map);



// Set
// value만을 저장하며 중복을 허용하지 않는 Collection
// 속성 메서드
// new Set()
// Set.size
// Set.add(value)
// Set.delete(value)
// Set.clear()
// Set.has(key)
// Set.kets(), Set.values(), Set.entires()

let set = new Set();
let num = new Set([1,2,3,4,5]);
let str = new Set("Hello");

console.log(set);
console.log(num);
console.log(str); // 중복된 값 l은 삭제

set.add(3).add(1).add(1).add(10).add(20);
console.log(set);

console.log(set.has(10));
console.log(set.has(2));

set.delete(1);
console.log(set.delete(-1));
console.log(set);

// iterator를 가진다
for(let item of str){
    console.log(item);
}
for(let item of str.keys()){ // key도 value를 반환
    console.log(item);
}
for(let item of str.values()){
    console.log(item);
}
for(let item of str.entries()){
    console.log(item);
}

console.log(typeof(String(123)));