// if문
const name = prompt("이름대라");

if (name == "엄준식") {
  alert("살아있다");
}

// miniquiz 양/음 의ㅣ정수 구하기
const num = prompt("숫자 말해라");
if (num > 0) {
  alert("양의 정수입니다.");
} else if (num < 0) {
  alert("음의 정수입니다");
} else {
  alert(0);
}

// miniquiz2 짝수/홀수 구분하기
const number = prompt("숫자 말해라");
if (number == 0) {
  alert(0);
} else if (number % 2 == 0) {
  alert("짝수입니다");
} else {
  alert("홀수입니다");
}

// miniquiz3
const a = prompt("숫자 말해라");
if (a > 0 && a % 2 == 0) {
  alert("양의 짝수입니다");
} else if (a > 0 && a % 2 == 1) {
  alert("양의 홀수입니다");
} else if (a < 0 && a % 2 == 0) {
  alert("음의 짝수 입니다");
} else if (a < 0 && a % 2 == -1) {
  alert("음의 홀수 입니다");
} else {
  const result = num == 0 ? "0입니다" : "!!ERROR!!";
  alert(result);
}

// miniquiz4
const year = prompt("몇년생임");
if (year % 12 == 0) {
  alert("원승이띠");
} else if (year % 12 == 1) {
  alert("닭띠");
} else if (year % 12 == 2) {
  alert("개띠");
} else if (year % 12 == 3) {
  alert("돼지띠");
} else if (year % 12 == 4) {
  alert("쥐띠");
} else if (year % 12 == 5) {
  alert("소띠");
} else if (year % 12 == 6) {
  alert("호랑이띠");
} else if (year % 12 == 7) {
  alert("토끼띠");
} else if (year % 12 == 8) {
  alert("용띠");
} else if (year % 12 == 9) {
  alert("뱀띠");
} else if (year % 12 == 10) {
  alert("말띠");
} else {
  alert(year % 12 == 11 ? "양띠" : "!!ERROR!!");
}
