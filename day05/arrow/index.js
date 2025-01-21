// 일반함수
function add(x, y) {
  return x + y;
}

// 화살표 함수 =>
const add = (x, y) => {
  return x + y;
};

const minus = (x, y) => x - y;

const isEvenOrOdd = (x) => (x % 2 == 0 ? "짝수" : "홀수");
