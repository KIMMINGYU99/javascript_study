const pizza = (foodEmoji) => foodEmoji + "피자";

const three = (englishWord) => englishWord.repeat(3);

const exchange = (won) => won * 0.0007;

const goToAcademy = (how) => {
  console.log("집에서 출발");
  how();
  console.log("학원도착");
};

const texi = () => console.log("택시타기");

const momCar = () => console.log("엄마차 타기");

const bus = () => console.log("버스타기");

const bicycle = () => console.log("자전거타기");

const walk = () => console.log("뚜벅이");

const makeBeverage = (beverage) => {
  console.log("주문받기");
  beverage();
  console.log("주문완료");
};
const coffee = () =>
  console.log("1.원두갈기, 2.평탄화하기, 3.커피기계넣기, 4.버튼클릭, 5.즙짜기");

const smoothie = () => console.log("1.재려넣기, 2.얼음넣기, 3.갈기, 4.즙짜기");

const tea = () => console.log("1.티백넣기, 2.뜨거운물넣기, 3.후~ 불기");
