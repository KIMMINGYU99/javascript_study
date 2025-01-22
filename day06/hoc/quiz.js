// const menu = [
//   {
//     name: "부대찌개",
//     price: 13000,
//     kcal: 700,
//     ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
//   },
//   { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
//   {
//     name: "샌드위치",
//     price: 0,
//     kcal: 400,
//     ingredients: ["고구마", "참치", "빵", "치즈"],
//   },
//   {
//     name: "해장국",
//     price: 10000,
//     kcal: 700,
//     ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
//   },
// ];

// const priceUp = (x) => {
//   parseInt((x.price = x.price * 1.1));
//   return x;
// };
// const newArr = menu.map(priceUp);
// console.log(newArr);

// const addSugar = (x) => {
//   x.kcal = x.kcal + 100;
//   x.ingredients.push("설탕");
//   return x;
// };

// const newArr_2 = menu.map(addSugar);
// console.log(newArr_2);

// const vegetarian = (x) => {
//   const result = x.ingredients.some((y) => y == "소고기" || y == "햄");
//   return !result;
// };
// const newArr_3 = menu.filter(vegetarian);
// console.log(newArr_3);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

const decafein = (x) => x.shots == 0;
console.log(starbucks.filter(decafein));

const discount = (x) => {
  x.price = x.ingredients.some((y) => y == "커피콩") ? x.price * 0.8 : x.price;
  return x;
};

console.log(starbucks.map(discount));

const honey = (x) => {
  x.name = x.ingredients.some((y) => y == "꿀") ? x.name : x.name + "꿀";
  x.price = x.ingredients.some((y) => y == "꿀") ? x.price : x.price + 300;
  x.ingredients.some((y) => y == "꿀")
    ? x.ingredients
    : x.ingredients.push("꿀");
  return x;
};
console.log(starbucks.map(honey));

// String -> Array
const arr = "엄준식".split("");
const arr1 = [..."엄준식"];

// Array -> String
["김밥", "천국"].join(" ");
