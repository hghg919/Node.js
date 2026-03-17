// 동기로 파일 기록하기 - writeFileSync 함수 (결과 비교 파일은 03\results\write-1.js)
const fs = require("fs");

const data = fs.readFileSync("./example1.txt", "utf8");
fs.writeFileSync("./text-1.txt", data);
// fs.writeFileSync("./text-1.txt", "안녕하세요. 반갑습니다");