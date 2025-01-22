// const arr = [1, 3, 5, 7, 9];

// // !!! 개중요 ㅈㄴ중요 씹중요 이거만 알면 됨 !!!
// // arr.map() => 요소들을 바꿔주는 함수
// const double = (x) => x * 2;

// const newArr = arr.map(double);
// console.log(newArr);

// const p10 = (x) => x + 10;
// const newArr2 = arr.map(p10);
// console.log(newArr2);

// const square = (x) => (x ** 2 < 10 ? "짜장면" : "탕수육");
// const newArr3 = arr.map(square);
// console.log(newArr3);

// const three = (x) => (x ** 3 < 100 ? "커피" : "붕어빵");
// const newArr4 = arr.map(three);
// console.log(newArr4);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const heart = (word) => (word.length >= 6 ? "💙" : "❤");

// const newFruitsArr = fruits.map(heart);
// console.log(newFruitsArr);

// const isLongOrShort = (word) =>
//   word.length * 2 < 15 ? "과일이름 짧음" : "과일이름 긺";

// const newFruitsArr2 = fruits.map(isLongOrShort);
// console.log(newFruitsArr2);

// // arr.some() => 요소중에 하나라도 있으면 true 없으면 false
// const hasThree = (x) => x == 3;
// const a = arr.some(hasThree);
// console.log(a);

// const hasUnder5 = (x) => x < 5;
// const b = arr.some(hasUnder5);
// console.log(b);

// const hasEven = (x) => x % 2 == 0;
// const c = arr.some(hasEven);
// console.log(c);

// // arr.every() => 요소 모두가 조건에 부합하는지

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const is_start_k_b_s = (word) =>
//   word[0] == "k" || word[0] == "b" || word[0] == "s";
// const isLength = (word) => 4 <= word.length && word.length <= 12;
// const has_i_o_u = (word) =>
//   word.includes("i") || word.includes("o") || word.includes("u") ? "💛" : "🧨";

// const newFruitsArr = fruits.some(is_start_k_b_s);
// const newFruitsArr2 = fruits.every(isLength);
// const newFruitsArr3 = fruits.map(has_i_o_u);

// console.log(newFruitsArr);
// console.log(newFruitsArr2);
// console.log(newFruitsArr3);

const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you`;

const result = song
  .split(" ")
  .map((word) => (word.length > 6 ? "💛" : word))
  .join(" ");
console.log(result);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.filter() => 거르는거
const isSixOver = numArr.filter((x) => x >= 6);
console.log(isSixOver);

const squareUnder100 = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);
console.log(squareUnder100);
