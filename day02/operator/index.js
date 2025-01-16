// 연산자

// 사칙(산술)연산
// + , -, / , * , %, **(제곱)

// 대입연산
// =

// 비교 연산 [Boolean 타입으로 귀결됨]
// < , >, >=, <=, ==(같다), !=(다르다), ===()
const c = 5 > 3; // true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // true
const c3 = 5 <= 3; // false
const c4 = 10 == 9; //false
const c5 = 10 != 9; // true
const c6 = 10 === 10; // true
const c7 = 10 === "10"; // false

// 논리 연산
// &&(and), ||(or), !(not)
const d = 5 > 3 && 10 > 5 && 3 > 0; //true
const d1 = false || false || false || false || false || true;
const d2 = !false; // true
const d3 = !(5 <= 3) || !(3 > 10); // true

// 삼항 연산
// 조건? 값1 : 값2
const e = 5 > 3 ? "떡볶이" : "순대";
const e1 = 5 > 10 ? "마라탕" : "요거트";

// 단항 연산
// +
const f = +"100"; // string -> number

// es6 연산자
// ??, ..., ?., #
