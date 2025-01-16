const food = prompt("좋아하는 음식은?");
const location = prompt("가장 최근에 갔던 장소는?");
console.log(`최근에 갔던 ${location} 에서 ${food}를 먹고싶어요`);

const height = Number(prompt("당신은 몇 m?"));
const weight = Number(prompt("당신은 몇 kg?"));
const bmi = weight / (height * height);
console.log(`당신은 bmi는 ${bmi}입니다`);

const usd = Number(prompt("오늘의 환율은?"));
const usd_cnt = Number("얼마를 원으로 환전하시겠습니까");
console.log(`${usd}달러 → ${usd * usd_cnt}원 입니다.`);

const btc = Number(prompt("1btc 는 얼마?"));
const btc_cnt = Number(prompt("몇 btc를 환산하고 싶습니까"));
console.log(`환산한 값은 ${btc * btc_cnt}입니다.`);
