let arrNumber = [];
document.getElementById("submit").onclick = function () {
  let number = +document.getElementById("number").value;
  arrNumber.push(number);
  document.getElementById("mes").innerHTML = arrNumber.join(",");
};
//1- Tính tổng số dương
document.getElementById("submit_2").onclick = function () {
  let total = 0;
  arrNumber.map(function (number) {
    if (number > 0) {
      total += number;
    }
  });

  document.getElementById("ex1").innerHTML = `Tổng số dương là: ${total}`;
};

//2- Đếm số dương
document.getElementById("submit_3").onclick = function () {
  let count = 0;
  arrNumber.map(function (number) {
    if (number > 0) {
      count++;
    }
  });

  document.getElementById("ex2").innerHTML = `Số dương là: ${count}`;
};

//3- Tìm số nhỏ nhất
document.getElementById("submit_4").onclick = function () {
  let minInNumbers = Math.min.apply(Math, arrNumber);
  document.getElementById("ex3").innerHTML = `Số nhỏ nhất là: ${minInNumbers}`;
};

//4- Tìm số nhỏ nhất
document.getElementById("submit_5").onclick = function () {
  let arrSoDuong = [];

  arrNumber.map(function (number) {
    if (number > 0) {
      arrSoDuong.push(number);
    }
  });
  let minInNumbers = Math.min.apply(Math, arrSoDuong);

  document.getElementById(
    "ex4"
  ).innerHTML = `Số  dương nhỏ nhất là: ${minInNumbers}`;
};

//5- Tìm số chẵn
document.getElementById("submit_6").onclick = function () {
  let evenNumber = 0;
  arrNumber.map(function (number) {
    if (number % 2 === 0) {
      evenNumber = number;
    }
  });

  if (evenNumber === 0) {
    document.getElementById("ex5").innerHTML = `Số  chẵn cuối cùng là: -1`;
  } else {
    document.getElementById(
      "ex5"
    ).innerHTML = `Số  chẵn cuối cùng là: ${evenNumber}`;
  }
};

//6- Đổi chỗ
document.getElementById("submit_7").onclick = function () {
  let vitri_1 = +document.getElementById("vitri_1").value;
  let vitri_2 = +document.getElementById("vitri_2").value;
  let valueViTri1 = arrNumber[vitri_1];
  arrNumber[vitri_1] = arrNumber[vitri_2];
  arrNumber[vitri_2] = valueViTri1;

  document.getElementById(
    "ex6"
  ).innerHTML = `Mảng sau khi đổi: ${arrNumber.join(",")}`;
};

//7- Sắp xếp  tăng dần
document.getElementById("submit_8").onclick = function () {
  arrNumber.sort(function (a, b) {
    return a - b;
  });

  document.getElementById(
    "ex7"
  ).innerHTML = `Mảng sau khi sắp xếp: ${arrNumber.join(",")}`;
};

//8- Tìm số nguyên tố đầu tiên
document.getElementById("submit_9").onclick = function () {
  let soNguyenTo = -1;
  let soHang = 1;
  let count = 0;
  arrNumber.map(function (number) {
    while (soHang <= number) {
      if (number % soHang === 0) {
        count++;
      }
      soHang++;
    }
    if (count === 2) {
      return (soNguyenTo = number);
    }
  });

  document.getElementById(
    "ex8"
  ).innerHTML = `Số nguyên tố đầu tiên là: ${soNguyenTo}`;
};

//9- Đếm số nguyên
let arrNew = [];
document.getElementById("add").onclick = function () {
  let numberNew = +document.getElementById("number_2").value;
  arrNew.push(numberNew);
  document.getElementById("mes_add").innerHTML = arrNew.join(",");
};

document.getElementById("submit_10").onclick = function () {
  let count = 0;
  arrNew.map(function (number) {
    if (Number.isInteger(number)) {
      count++;
    }
  });
  document.getElementById("ex9").innerHTML = `Số nguyên là: ${count}`;
};

//10- So sánh số lượng số âm và dương
document.getElementById("submit_11").onclick = function () {
  let soAm = 0;
  let soDuong = 0;
  arrNumber.map(function (number) {
    if (number >= 0) {
      soDuong++;
    } else {
      soAm++;
    }
  });

  if (soDuong > soAm) {
    return (document.getElementById("ex10").innerHTML = `Số  dương > Số  âm`);
  } else if (soAm > soDuong) {
    return (document.getElementById("ex10").innerHTML = `Số  dương < Số  âm`);
  } else {
    return (document.getElementById("ex10").innerHTML = `Số  dương = Số  âm`);
  }
};
