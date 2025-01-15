const name = window.prompt("이름 무엇");
const age = window.prompt("나이 몇");
const color = window.prompt("좋아하는색 무엇");

window.alert(
  `제 이름은 ${name}, 나이는 ${age}살이고, 좋아하는 색은 ${color}입니다.`
);

const date = window.prompt("오늘날짜를 입력하세요");
const schedule = window.prompt("계획된 일정은?");

window.alert(`오늘의 날짜는 ${date}, 계획하신 일정은 ${schedule}입니다.`);

const num1 = Number(window.prompt("숫자를 입력하세요"));
const num2 = Number(window.prompt("숫자를 입력하세요"));

window.alert(
  `두수의합은 ${num1 + num2}입니다. 두수의차는 ${num1 - num2}입니다.`
);

const price = Number(window.prompt("음식의 가격"));
const count = Number(window.prompt("음식의 개수"));

window.alert(price * count);

const temp = Number(window.prompt("온도를 입력하세요"));

window.alert((temp * 9) / 5 + 32);

const line = Number(window.prompt("정사각형 한변의 길이는"));

window.alert(line * line);
