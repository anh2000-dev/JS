// Nhập vào điểm TB, in ra xếp loại của học sinh
// Giỏi: dtb <= 10 và dtb >=8
// Khá : 8>dtb>=6.5
// TB : 6.5>dtb>=5
// Yếu: 0<= dtb <5
let dtb = Number(prompt("Nhập vào dtb:"));
if (dtb <= 10 && dtb >= 8) {
  console.log("Xếp loại giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
  console.log("Xếp loại khá");
} else if (dtb < 6.5 && dtb >= 5) {
  console.log("Xếp loại tb");
} else if (dtb < 5 && dtb >= 0) {
  console.log("Xếp loại yếu");
}
