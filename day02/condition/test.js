const movie = +prompt("영화종류를 나타내는 정수 말해라");
const age = +prompt("나이 말해라");

const movie_price_1 = 10000;
const movie_price_2 = 8000;
const movie_price_3 = 9000;

const discount_13 = 0.5;
const discount_60 = 0.3;

switch (movie) {
  case 1:
    if (age < 13) {
      alert(`${movie_price_1 - movie_price_1 * discount_13}원입니다`);
    } else if (age > 60) {
      alert(`${movie_price_1 - movie_price_1 * discount_60}원입니다`);
    } else {
      alert(`${movie_price_1}원입니다`);
    }
    break;
  case 2:
    if (age < 13) {
      alert(`${movie_price_2 - movie_price_2 * discount_13}원입니다`);
    } else if (age > 60) {
      alert(`${movie_price_2 - movie_price_2 * discount_60}원입니다`);
    } else {
      alert(`${movie_price_2}원입니다`);
    }
    break;
  case 3:
    if (age < 13) {
      alert(`${movie_price_3 - movie_price_3 * discount_13}원입니다`);
    } else if (age > 60) {
      alert(`${movie_price_3 - movie_price_3 * discount_60}원입니다`);
    } else {
      alert(`${movie_price_3}원입니다`);
    }
    break;
  default:
    alert("잘못된 영화 종류입니다.");
    break;
}
