// function[함수]
// 마술상자
// 입력 : x
// 출력 : x+100

function plus100(x) {
  return x + 100;
}

// plus100[함수이름]
const a = plus100(200);
console.log(a); // 300

function twice(x) {
  return x * 2;
}
const b = twice(300);
console.log(b);

function luckybiky(sentence) {
  return sentence + "럭키비키자나😊";
}
const c = luckybiky("안녕");
console.log(c);

function isOddOrEven(x) {
  return x % 2 ? "홀수" : "짝수";
}
const num = prompt("숫자입력");
alert(isOddOrEven(num));
