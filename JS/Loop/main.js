// for
// for(Init Expression; Test Expression; Update Expression){}
// for .. in
// for(key in object){}

const person= {fname: "John", lname: "Bob", age: 25};

let text = "";
for(let x in person){
    text += person[x];
}
console.log(text);

// for .. of
// Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
// ES6에 새로 추가된 Collection 기반의 반복 구문
// for(variable of iterable){}



// while
// while(Test Expression){}


// do ... while
// do {} while(Test Expression);


// break;
// 반복문 수행시 코드 ㅂ르록을 탈출할 때 사용되는 식별자
// 다중 반복문일 경우 가장 안쪽이 반복문을 종료
// Label을 통하여 다중 반복문을 한번에 종료가능

// Label : 반복문 앞에 콜론과 함께 쓰이는 식별자

// continue;
// 반복문 수행 시 코드 불록 실행을 해당 라인에서 중지하고
// 블록 코드를 종료 시킨 후 반복문 내 명시된 조건 판단



// Label
// 프로그램 내 영역을 지정하여 별도 이름을 붙이는 식별자 (C언어의 goto)
// 식별자이름:
// break 식별자이름;
// break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어야 함
// 사용이 권장되지 않음

end: for(let i = 0; i < 3; i++)
{
    for(let j = 0; j< 3; j++)
    {
        console.log(i+"*"+j+"="+i*j);
        break end;
    }
}

// 연습문제
const UNTIL_NUM = 10;
let sum = 0;
for(let i = 0; i <= UNTIL_NUM; i++)
{
    if(i%2 === 0)
    {
        sum += i;
    }
}
console.log(sum);

// 문제 2
for (let i = 2; i<= 9; i++)
{
    for(let j = 1; j<=9; j++)
    {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
