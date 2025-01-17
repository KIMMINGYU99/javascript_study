const movie = prompt("영화종류 번호 입력(1~3)");
const age = prompt("나이를 입력하세요");
const category = ["액션영화", "로맨틱코미디 영화", "공포 영화"];
const movie_price = [10000, 8000, 9000];

if (age < 13)
  alert(
    `선택하신 ${category[movie - 1]}의 가격은 ${
      movie_price[movie - 1] * 0.5
    }원입니다`
  );
else if (age >= 60)
  alert(
    `선택하신 ${category[movie - 1]}의 가격은 ${
      movie_price[movie - 1] * 0.7
    }원입니다`
  );
else
  alert(
    `선택하신 ${category[movie - 1]}의 가격은 ${movie_price[movie - 1]}원입니다`
  );
