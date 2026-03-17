// 동기로 파일 기록하기 - existsSync 함수, writeFileSync 함수 (결과 비교 파일은 03\results\write-2.js)
const fs = require("fs");

const data = fs.readFileSync("./example1.txt", "utf8");
if (fs.existsSync("text-1.txt")) {
    console.log("file alredy exist");
} else {
    fs.writeFileSync("text-1.txt", data);
}
