const add = (x,y) =>x+y;

const add2 = function(x, y){
    return x+y;
}

const add3 = add2;

let add4 = add;

console.log(add4(4,5));
console.log(add3(1,3));

console.log(Object.getOwnPropertyDescriptors(add));
console.log(Object.getOwnPropertyDescriptors(add4));
console.log(Object.getOwnPropertyDescriptors(add2));
console.log(Object.getOwnPropertyDescriptors(add3));

console.log("------------------------------------------------")

// method
// 객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 부름

// let list = ["john", 27, function hello_func(){
//     console.log("hello");
// },
// ];

// let obj = {
//     name: "john",
//     age: 27,
//     hello_func(){
//         console.log("hello " + this.name);
//     },
// };

// function hello_func(){
//     console.log("hello " + this.name);
// }

// function hi_func(){
//     console.log("hi");
// }


// hello_func();
// obj.hello_func();
// list[2]();

let user = {name: "john"};
let admin = {name: "admin"};

function hello_func(){
    console.log("hello " + this.name);
}

user.func = hello_func;
admin.func = hello_func;

user["func"]();
admin["func"]();