/* // quiz
// 메뉴 아아-4000, 라떼-4500, 유자차-4000
// 판매기능 : 번호를 물어보고 판매되면 매출이 올라감
// 메뉴추가 : 이름과 가격이 주어지면 메뉴에 추가됨
const starbucks = {
  menu: [
    { name: "아메리카노", price: 4000 },
    { name: "라떼", price: 4500 },
    { name: "유자차", price: 4000 },
  ],
  sale: 0,
  sell: function (sellNum) {
    if (!this.menu[sellNum]) console.log("그런메뉴없다");
    else console.log(`${this.menu[sellNum].name} 메뉴가 판매되었습니다`);
    this.sale += this.menu[sellNum].price;
  },
  add: function (addName, addPrice) {
    console.log(`${addname} 메뉴가 추가되었습니다`);
    this.menu.push({ name: addName, price: addPrice });
  },
};

// quiz 2.

const magician = {
  HP: 100,
  MP: 100,
  level: 1,
  exp: 0,
  getExp: function (exp) {
    this.exp += exp;
    if (this.exp >= 100) {
      this.level++;
      this.exp = 0;
      console.log(`레벨업 현재 레벨${this.level}`);
    }
  },
  skill: [
    { name: "매직클로", hp: 0, mp: 10, exp: 10 },
    { name: "텔레포트", hp: 0, mp: 50, exp: 50 },
  ],
  useSkill: function (skillNum) {
    if (!this.skill[skillNum]) console.log(`그런스킬없음`);
    else {
      if (this.MP >= this.skill[skillNum].mp) {
        console.log(`${this.skill[skillNum].name}발동`);
        this.MP -= this.skill[skillNum].mp;
        this.getExp(this.skill[skillNum].exp);
      } else console.log("마나가 부족합니다");
    }
  },
  drinkPotion: function () {
    this.HP += 50;
    this.MP += 50;
    console.log(`포션을 마십니다 현재체력${this.HP}, 현재마나${this.MP}`);
  },
};

magician.useSkill(0);
magician.useSkill(1);
magician.useSkill(1);
magician.drinkPotion();
magician.useSkill(1);

console.log(magician);

// quiz 3.

const youtube = {
  id: "김민규",
  subscribeChannel: [],
  likeChannel: [],
  subscribe: function (newChannal) {
    this.subscribeChannel.push(newChannal);
  },
  like: function (newChannal) {
    this.likeChannel.push(newChannal);
  },
};

// quiz 4.
const car = {
  name: "Porsche 911",
  speed: 100,
  speedUp: function () {
    this.speed += 10;
  },
  speedDown: function () {
    this.speed -= 10;
    if (this.speed <= 0) this.speed = 0;
  },
  break: function () {
    this.speed = 0;
  },
  printSpeed: function () {
    console.log(`현재속도 ${this.speed} 입니다`);
  },
}; */

// quiz 5.

const calculator = {
  result: 0,
  history: [],
  updateHistory: function (update) {
    this.history.push(update);
  },
  add: function (x) {
    this.result += x;
    this.updateHistory(`${x}를 더한 값은 ${this.result}입니다`);
  },
  minus: function (x) {
    this.result -= x;
    this.updateHistory(`${x}를 뺀 값은 ${this.result}입니다`);
  },
  multiply: function (x) {
    this.result *= x;
    this.updateHistory(`${x}를 곱한 값은 ${this.result}입니다`);
  },
  divide: function (x) {
    x == 0 || this.result == 0
      ? this.updateHistory(`ERROR`)
      : ((this.result /= x),
        this.updateHistory(`${x}를 나눈 값은 ${this.result}입니다`));
  },
  square: function (x) {
    this.result = this.result ** x;
    this.updateHistory(`${x}제곱한 값은 ${this.result}입니다`);
  },
  clear: function () {
    this.result = 0;
    this.updateHistory(`클리어한 값은 ${this.result}입니다`);
  },
  showHistory: function () {
    console.log(this.history);
  },
  KHG: function () {
    alert("뭐이렇게많아");
  },
};

calculator.add(3);
calculator.square(2);
calculator.add(255);
calculator.divide(0);
calculator.showHistory();
