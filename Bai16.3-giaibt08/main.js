// Viết chương trình nhập vào 1 năm dương lịch, kiểm tra
// năm đó có phải năm nhuận hay không .
let nam = Number(prompt("Nhập vào 1 năm"));
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log(`Năm ${nam} là năm nhuận`);
} else {
  console.log(`Năm ${nam} ko là năm nhuận`);
}
