const bus = +prompt("버스종류를 나타내는 정수 말해라");
const age = +prompt("나이 말해라");
const bus_price = [1200, 2000, 1000];

if (dage <= 7 || age >= 60) alert("무료입니다");
else if (8 <= age <= 19)
  alert(`${bus_price[bus - 1] - bus_price[bus - 1] * 0.3}원입니다`);
else alert(`${bus_price[bus - 1]}원 입니다`);
