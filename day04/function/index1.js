// 함수
// 자바스크립트에서는 함수를 일급 객체로 취급함

const a = [];
const b = {};
const c = function (a, b) {
  return a + b;
};
const d = c(1, 2); // 3

const subway = {
  name: "부평점 서브웨이",
  sale: 0,
  sellBread: function () {
    this.sale += 1000;
  },
  printSale: function () {
    console.log(this.sale);
  },
};

subway.sellBread();
subway.sellBread();
subway.sellBread();
subway.printSale();

const baskinRabbins = {
  icecream: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는 외계인", price: 2500 },
    { name: "스트로베리", price: 4000 },
  ],

  sale: 0,
  sellIcecream: function (sellIcecreamNum) {
    if (this.icecream[sellIcecreamNum] == undefined)
      console.log("그런 아이스크림없음");
    else {
      console.log(
        `${this.icecream[sellIcecreamNum].name} 아이스크림이 판매되었습니다`
      );
      this.sale += this.icecream[sellIcecreamNum].price;
    }
  },
  pringSale: function () {
    console.log(`현재매출 ${this.sale}원`);
  },
  addIcecream: function (addIcecreamName, addIcecreamPrice) {
    this.icecream.push({ name: addIcecreamName, price: addIcecreamPrice });
  },
};

baskinRabbins.sellIcecream(0);
baskinRabbins.sellIcecream(2);
baskinRabbins.pringSale();
baskinRabbins.sellIcecream(3);
baskinRabbins.addIcecream("치즈케잌", 3500);
baskinRabbins.sellIcecream(3);
baskinRabbins.pringSale();
