const nickname = prompt("닉네임 적어라");
alert(`${nickname || "Guest"}님 환영합니다`);

const password = prompt("비밀번호 대라");
alert(`${password == 1024 && "정답"}`);
