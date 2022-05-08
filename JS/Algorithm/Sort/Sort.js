
let swap = function (arr, idx_1, idx_2){
    let tmp = arr[idx_1];
    arr[idx_1] = arr[idx_2];
    arr[idx_2] = tmp;
};

let ascending = function (x,y){
    return x > y;
}
let descending = function (x,y){
    return x < y;
}

let BubbleSort_1 = function (arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr,j,j+1);
            }
        }
        console.log(`${i}번째 ${arr}`);
    }
};

let BubbleSort_2 = function (arr, compare){
    let swapped;
    for(let i = 0; i < arr.length; i++){
        swapped = 0;
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(compare(arr[j],arr[j+1])){
                swap(arr,j,j+1);
                swapped++;
            }
        }
        // 값 이동이 없으면 정렬이 완료되었다는 뜻
        if(!swapped){
            break;
        }
        // console.log(`${i}번째 ${arr}`);
    }
};

let arr = [2,52, 1,7,63,12];
console.log(arr);
BubbleSort_1(arr);
console.log(arr);
arr = [2,52, 1,7,63,12];
let sorting = [BubbleSort_2];
let order = [ascending, descending];
let array;
for(let i = 0; i < sorting.length; i++){
    for(let j = 0; j < order.length; j++){
        console.log(sorting[i].name, order[j].name);

        array = [...arr];
        sorting[i](array,order[j]);
        console.log(array);
    }
}