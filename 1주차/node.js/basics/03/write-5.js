// fs 모듈의 appendFile 함수 연습하기 (결과 비교 파일은 03\results\write-5.js)
const fs = require("fs");
fs.readFile("./example1.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    }

    fs.appendFile("./text-2.txt", data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("appending");
    });
});
