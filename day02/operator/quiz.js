// quiz 1번
const height = Number(prompt("손님의 키는?"));
const board = height < 140 ? "탑승금지" : "탑승가능";
alert(board);

// quiz 2번
const number = Number(prompt("숫자를 입력해주세요"));
const num = number % 2 == 0 ? "짝수" : "홀수";
alert(num);

// quiz 3번
const year = Number(prompt("태어난 년도를 입력하세요"));
const age = 2026 - year < 20 ? "미성년자 입니다" : "성인입니다";
alert(age);

// quiz 4번
const second = Number(prompt("몇초인지 입력하세요"));
const min = Math.floor(second / 60);
const sec = second % 60;
const time = second % 60 == 0 ? `${min}분` : `${min}분 ${sec}초`;
alert(time);

// quiz 4번 변경
const hour = Number(prompt("몇시간 걸렸는지 입력하세요"));
const minute = Number(prompt("몇분 걸렸는지 입력하세요"));
const sec1 = Number(prompt("몇초 걸렸는지 입력하세요"));
const result = hour * 3600 + minute * 60 + sec1;
alert(`${result}초입니다.`);

// quiz 5번
const num1 = Number(prompt("첫번째 숫자를 입력하세요"));
const num2 = Number(prompt("두번째 숫자를 입력하세요"));
const big = num1 > num2 ? num1 : num2;
alert(big);
