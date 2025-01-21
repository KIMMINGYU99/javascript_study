const foodArr = [
  "된장국",
  "김치찌개",
  "짜파게티",
  "가자미튀김",
  "비엔나소세지(병장도깨우는)",
  "라면",
];

const ramen = () => {
  console.log(`라면`);
};

const cook = (recipe) => {
  console.log("요리시작!");
  recipe();
  console.log("요리끝!");
};

cook(ramen);

// 함수안에 함수 매개변수
// 콜백 함수[마술상자 안에 마술상자]

const fire = () => {
  console.log("불");
};
const ice = () => {
  console.log("얼음");
};
const lightening = () => {
  console.log("번개");
};

const skill = (masic) => {
  console.log("스킬준비!");
  masic();
  console.log("스킬완료!");
};
skill(fire);
