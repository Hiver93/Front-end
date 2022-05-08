// 점화식(재귀식)

function recursive1(s, t, number){
    if(number == 1){
        return s;
    }
    return recursive1(s,t,number-1) + t;
}

function forloop(s,t,number){
    let acc = 0;

    for(let i = 1; i <= number; i++){
        if(i == 1){
            acc += s;
        }
        else{
            acc += t;
        }
        console.log(`${i} ${acc}`);
    }
    return acc;
    
}
let result = forloop(3,2,5);
console.log(result);
result = recursive1(3,2,5);
console.log(result);

function Factorial(number){
    if(number == 1)
    {
        return 1;
    }
    return Factorial(number-1) * number;
}

result = Factorial(5);
console.log(result);

function Fibonacci(number){
    if(number == 1||number==0)
    {
        return number;
    }
    return Fibonacci(number-1) + Fibonacci(number-2);
}

result = Fibonacci(5);
console.log(result);