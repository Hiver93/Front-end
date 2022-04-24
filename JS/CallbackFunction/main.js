// 콜백 함수(Callback Function)란 다른 함수의 매개변수로 전달ㅇ되어 수행되어지는 함수
// 고차 함수(Higher-order Function)란 매개변수를 통해 함수를 받아 호출하는 함수
function callback_func(){
    console.log("i'm callback function");
}

function higher_order_func(callback){
    console.log("I'm higher-order function");
    callback();
}

higher_order_func(callback_func);

function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}

function div(x,y){
    return x/y;
}
function test(x,y){
    return x-y*y;
}
function calculator(callback, x, y)
{
    return callback(x,y);
}

console.log(calculator(add, 7, 3));
console.log(calculator(sub, 7, 3));
console.log(calculator(mul, 7, 3));
console.log(calculator(div, 7, 3));
console.log(calculator(test, 7, 3));
