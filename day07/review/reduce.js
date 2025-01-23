// 누적시킴(쌓기)
// [].reduce((누적값, 새로운값)=>{누적값 () 새로운값},시작하는 값)
const result = [1, 2, 3, 4, 5].reduce((x, y) => {
  console.log({ x, y });
  return x + y;
}, 0);
console.log(result);

const coffee = "americano";
console.log(coffee.split("a").reduce((x, y) => x + y));
