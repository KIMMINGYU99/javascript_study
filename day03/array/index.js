// 커피 메뉴 세개 선언
const a = "아메리카노";
const b = "카페라뗴";
const c = "바닐라라떼";

const menu = ["아메리카노", "카페라뗴", "바닐라라떼"]; // Array 타입
// const test = [100, false, "문자", ["커피", "콜라", "아이스크림"]];

const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

// 배열 관련된 연산자

// 1. indexing 연산자 (꺼내기)
const test = [menu, soccer];
console.log(test[0][2]); // 바닐라라떼
console.log(test[1][1]); // 황희찬

// 2. Destruturing 연산자( = 분해)
const test1 = [...menu, ...soccer];

// 3. Rest 연산자
const [son, ...rest] = soccer; // ["손흥민", "황희찬", "이강인", "김민재"]
console.log(son); // 손흥민
console.log(rest); // ["황희찬", "이강인", "김민재"]

const [son1, hwang] = soccer; // ["손흥민", "황희찬", "이강인", "김민재"]
console.log(son1); // 손흥민
console.log(hwang); // 황희찬

// 4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬이형";
console.log(soccer);

// 5. delete 연산자 ( = 삭제)
delete soccer[3];
