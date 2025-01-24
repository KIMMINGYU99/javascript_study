const arr = [1, 3, 5, 7, 9];

arr.map((x) => x + 1);

// 배열 0부터 1000까지 담김코드
const newArr = Array(1001)
  .fill(0)
  .map((x, i) => i);
console.log(newArr);

// 배열
const newArr2 = Array(20)
  .fill(0)
  .map((x, i) => 5 * (i + 1));
console.log(newArr2);

// 배열 2
const newArr3 = Array(101)
  .fill(0)
  .map((x, i) => {
    if (i == 0) x = 0;
    else if (i % 3 == 0 && i % 5 == 0) x = "🐰";
    else if (i % 5 == 0) x = "🐷";
    else if (i % 3 == 0) x = "🐭";
    else x = i;
    return x;
  });
console.log(newArr3);

// quiz
const year = Array(126)
  .fill(0)
  .map((x, i) => {
    if ((i + 1900) % 12 == 0) x = "🐵";
    else if ((i + 1900) % 12 == 1) x = "🐔";
    else if ((i + 1900) % 12 == 2) x = "🐶";
    else if ((i + 1900) % 12 == 3) x = "🐷";
    else if ((i + 1900) % 12 == 4) x = "🐭";
    else if ((i + 1900) % 12 == 5) x = "🐮";
    else if ((i + 1900) % 12 == 6) x = "🐱";
    else if ((i + 1900) % 12 == 7) x = "🐰";
    else if ((i + 1900) % 12 == 8) x = "🐲";
    else if ((i + 1900) % 12 == 9) x = "🐍";
    else if ((i + 1900) % 12 == 10) x = "🐴";
    else if ((i + 1900) % 12 == 11) x = "🐑";
    return { 연도: `${i + 1900}년`, 띠: x };
  });
console.log(year);
// 다른방법
const makeZodiac = (to, from) => {
  const zodiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zodiac[v % 12] };
    });
};

const result = makeZodiac(1000, 3000);
console.log(result);
