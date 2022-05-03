// 생성자 함수
// 생성자 함수와 new 연산자를 통해 빠른 객체 생성 가능

function FishBread(flavor, price){
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

// new.target
// new.target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능
function User(name){
    console.log(new.target);
    if(!new.target)
    {
        return new User(name);
    }
    this.name = name;
}

let result_1 = User("john");
console.log(result_1);
let result_2 = new User("john");
console.log(result_2);