const coffee = {
  name: "아메리카노",
  price: 2500,
  ingredients: ["물", "커피콩", "얼음"],
};

// .(dot) 연산자
console.log(coffee.price);
console.log(coffee["price"]);

// 커피콩 꺼내기
console.log(coffee.ingredients[1]);
console.log(coffee["ingredients"][1]);

const dplus = {
  top: {
    palyerName: "siwoo",
    champion: "Sion",
    kda: {
      kill: 1,
      death: 3,
      assist: 10,
    },
  },
  mid: {
    palyerName: "showmaker",
    champion: "Ahri",
    kda: {
      kill: 9,
      death: 2,
      assist: 7,
    },
  },
};

// 콘솔로 탑 미드 총 킬 나타내기
console.log(dplus.top.kda.kill + dplus.mid.kda.kill);

const lunch = {
  name: "햄버거",
  franchise: "버거킹",
};
// 오브젝트 데이터 추가
lunch.kcal = 900;

// 사이드메뉴, 음료 추가
lunch.side = "치즈스틱";
lunch.drink = "제로콜라";

// 오브젝트 삭제
delete lunch.name;

//
const drama = {
  title: "오징어게임",
  grade: 18,
  genres: ["액션", "블랙코미디", "군상극", "데스게임"],
};
const a = drama.title; // 오징어게임
const { title } = drama; // 오징어게임
const [action, black] = drama.genres;

const menu = ["아메리카노", "라떼", "민트"];
const a1 = menu[0]; // 아메리카노
const [a2] = menu; // 아메리카노

const player = {
  name: "이승엽",
  position: ["타자"],
  salary: 30000,
};

const coffee1 = {
  coffeename: "아메리카노",
  price: 2500,
};

// key - value 이름이 같으면 생략 가능
const data = { player, coffee1 };

const data1 = { ...player, ...coffee };

//
const cosmetic = {
  type: "핸드크림",
  company: "카밀",
  price: 8000,
  ingredients: {
    first: {
      name: "글리세린",
      chemicals: ["수소", "산소"],
    },
    second: {
      name: "미네랄오일",
      chemicals: ["알케인", "파라핀"],
    },
  },
};
// 카밀꺼내기
const { company } = cosmetic;

// 첫번째 성분만 뺴기
const { first } = cosmetic.ingredients;

// name: "글리세린", chemicals: ["수소", "산소"]
const test1 = { ...cosmetic.ingredients.first };

// ------
const laptop = {
  title: "그램",
  price: 800000,
  specs: {
    cpu: "intel i5",
    ram: "8GB",
    storage: "256GB SSD",
  },
};

const { cpu, ram, storage } = laptop.specs;

console.log(cpu);
console.log(ram);
console.log(storage);
