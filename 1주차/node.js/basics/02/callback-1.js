// '주문 접수' 3초 후 '완료' 메시지 표시하기   (결과 비교: 02\results\callback-1.js)
const order = (coffe, callback) => {
    console.log(`${coffe} 주문 접수`);
    setTimeout(() => {
        callback(coffe);
    }, 3000);
}

const display = (result) => {
    console.log(`${result} 완료!`);
}

order('아메리카노', display);