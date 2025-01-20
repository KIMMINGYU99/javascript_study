const mbti = prompt("mbti 입력");
const first = mbti[0].toUpperCase();
const second = mbti[1].toUpperCase();
const third = mbti[2].toUpperCase();
const fourth = mbti[3].toUpperCase();

const mbtiObj = {
  E: "외향적",
  I: "내향적",
  S: "직관적",
  N: "감각적",
  F: "감성적",
  T: "이성적",
  P: "즉흥적",
  J: "계획적",
};

alert(
  `${mbtiObj[first]}, ${mbtiObj[second]}, ${mbtiObj[third]}, ${mbtiObj[fourth]} 입니다`
);

const email = prompt("이메일 입력");
const hasAt = email.includes("@");
const hasDot = email.includes(".com") || email.includes(".net");
const hasDomain =
  email.includes("naver") ||
  email.includes("kakao") ||
  email.includes("yahoo") ||
  email.includes("paran");
hasAt && hasDot && hasDomain
  ? alert("이메일타당함")
  : alert("이메일 타당하지않음");
