// length charAt(index) charCodeAt(index)
// indexOf(), lastIndexOf()

let str1 = "hello_1", str2 = String("Hello2");
let num = 3, str3 = `hello_${num}`;

console.log("line\n\u{1F60D}fe\ted"); // 개행 유니코드 탭

// String.length
let str = "Hello\nwolrd\n";
console.log(str.length);

// String.charAt(index), String.charCodeAt(index), String[index]

console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[1]);

// 문자열 검색
// String.indexOf(substr, pos), STring.lastIndexOf(substr,pos)
// String.includes(substr,pos), String.start

let test = "Hello, world!!";

console.log(test.indexOf("l",3));
console.log(test.lastIndexOf("l"));

console.log(test.includes("Hello"));// 문자가 있는지 찾아 bool로 반환
console.log(test.includes("hello")); // 대소문자 구분
console.log(test.startsWith("ello")); // 시작문자까지 확인
console.log(test.endsWith("!!")); // 끝문자 확인

let test2 = "HeLlO";
console.log(test2.toUpperCase()); // 대문자 소문자로 변환하여 출력
test2 = test2.toUpperCase();
console.log(test2);
console.log(test2.toLowerCase());


// 문자열 반환

// 문자열 치환
// 처음 만나는 요소 문자열 치환(치환된 문자열 반환): String.replace(origin_str, change_str)
// 정규 표현식 활용 문자열 치환: 치환 문자열에 정규 표현식 기입 -> /치환문자열/g(전체)i(대소문자 구분X)

let test3 = "helLo, world!!!";
let changed_test = "";

changed_test = test.replace("world", "earth");
console.log(changed_test);

console.log(test.replace("!","?")); // 하나만 변경
console.log(test.replace("l","i"));

console.log(test.replace(/l/g,"i"));
console.log(test.replace(/!/g,"?"));

// 문자열 추출
// 위치 기반 문자열 추출: String.slice(start,end), String.substring(start,end)
// 길이 기반 문자열 추출: String.substr(start,length)

let test4 = "hello, world!!!";

console.log(test4.slice(2,5));
console.log(test4.slice(4)); // end인자 미입력시 뒤로 모두 자름
console.log(test4.slice(-4)); // 음수 입력시 뒤에서 세서 자름

console.log(test4.substring(2,5));
console.log(test4.substring(5,2)); // 인자 위치가 바뀌면 자동변경하여 자름

// split
let fruits = "apple,banana,melon";

result = fruits.split(","); // 나눌 기준 명시
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let text = "hello";

result = text.split("",2); // 빈 기준을 입력하면 문자별로 나눔, 2번째 인자로 몇개를 반환할건지 명시 
console.log(result); // 

