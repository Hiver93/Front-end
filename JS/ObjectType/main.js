// object 다수의 원시자료형을 포함하거나 복잡한 개체(entity)를 표현할 수 있는 자료형
// Object() 혹은 중괄호{}를 통해 생성
// 개체는 key: value 형태로 표현하며, 접근은 object.key 형태로 표현

let user = {
    name: "john",
    age: 27,
    sizes: {
        height: 180,
        wegiht: 72,
    },
};

console.log(typeof user);
console.log(user.name);
console.log(user.age);

user.name = "kim";
console.log(user.name);



// 깊은 복사, 얕은복사에 조심 Shallow copy, Deep copy
// let admin = user;
// console.log(admin);

// admin.name = "park";
// console.log(admin);
// console.log(user);

// 얕은 복사
// object 내에 또 다른 object가 있으면 복사가 되지 않는다.

//for문
// let admin = {};

// for(let key in user){
//     admin[key] = user[key];
// }

// assign 함수
//let admin = Object.assign({},user);


// 전개 연산자
//let admin = {...user};



// 깊은 복사
// stringfy: js object -> string, parse: string -> js object
let admin = JSON.parse(JSON.stringify(user));