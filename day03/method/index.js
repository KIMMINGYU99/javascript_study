// number, string, boolean, null, undefined
// array, object, window, console

const coffee = "americano";
console.log(coffee.includes("can"));

// 유저에게 아이디 프롬프트로 입력받기
// @도 포함하고 IT도 포함하면 합격

const id = prompt("아이디 적어라");
if (id.includes("@" && "IT")) alert("!!합격!!");
else alert("!!불합격!!");

"choco".toUpperCase(); // 대문자화
"choco".toLowerCase(); // 소문자화

const word = prompt("단어 대라");
const result =
  word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
alert(result);
