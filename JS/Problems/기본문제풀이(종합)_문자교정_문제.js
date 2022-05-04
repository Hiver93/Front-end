/* 9. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = "";

  let tmp_list = str.split(" ");

  for(let i of tmp_list){
    fix_str += i[0].toUpperCase() + i.slice(1) + " ";
  }
  
  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
