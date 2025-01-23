const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getLotto = () => {
  while (true) {
    const lotto = [
      ...new Set(
        Array(6)
          .fill(0)
          .map(() => getRandom(1, 45)) // 랜덤 번호 생성
      ),
    ];

    if (lotto.length == 6) return lotto; // 배열 길이가 6이면 반환
  }
};

console.log("Generated Lotto Numbers:", getLotto());
