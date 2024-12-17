//Bài tập 10: Viết chương trình cho người dùng nhập vào 1 tháng bất kỳ
// từ 1 – 12 => Cho biết tháng đó có bao nhiêu ngày ?
let month = parseInt(prompt("Nhập vào 1 tháng :"));
if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log(`Thang ${month} có 31 ngay`);
} else if (month == 2) {
  let nam = parseInt(prompt("Nhập vào 1 năm:"));
  if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
    console.log(`Thangs 2 năm ${nam} có 29 ngày`);
  } else {
    console.log(`Thangs 2 năm ${nam} có 28 ngày`);
  }
} else {
  console.log(`Thangs ${month} có 30 ngày`);
}
