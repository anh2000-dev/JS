//  Bài tập 07: Tìm x, y khi biết tổng và hiệu của chúng
let tong = Number(prompt("Nhập vào tổng 2 số:"));
let hieu = Number(prompt("Nhập vào hiệu 2 số:"));
let x = (tong + hieu) / 2;
let y = tong - x;
console.log(`x = ${x}`);
console.log(`y = ${y}`);
