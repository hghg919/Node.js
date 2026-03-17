// 비동기로 파일 기록하기 -  writeFile 함수 (결과 비교 파일은 03\results\write-3.js)
const fs = require("fs");

fs.readFile("./example1.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    }
    fs.writeFile("./text-3.txt", data,{flag:"wx"},(err) => {
        if(err) {
            console.log(err);
        }else{
        console.log("file is saved!");
}});
});