function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function hello(name) {
  return `${name} 님 안녕`;
}
function tolength(word) {
  return `${word} 문자의 길이 :${word.length}`;
}

function double_three(x) {
  return x ** 2 * 3;
}
function lunch_menu(menu) {
  return `점심메뉴 : ${menu}입니다.`;
}
function allergy_test(sentence) {
  return sentence.includes("새우" || "땅콩" || "조개")
    ? "알러지 있음"
    : "알러지 없음";
}

function threeToArray(x, y, z) {
  return [x, y, z];
}

function getIphone(ver, model, storage) {
  return { version: ver, model: model, storage: storage };
}

function angle(x) {
  if (x == 0 || x == 180) return "평각";
  else if (x == 90) return "직각";
  else if (180 > x > 90) return "둔각";
  else if (0 < x < 90) return "예각";
  else return "X";
}

function splitAndUpper(word, alphabet) {
  const [first] = word.split(alphabet);
  return first.toUpperCase();
}

function wordLength(word) {
  return 4 <= word.length <= 10 ? "길이가 유효" : "길이가 유효하지않음";
}
