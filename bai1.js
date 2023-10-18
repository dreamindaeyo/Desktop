function show() {
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  let soNguyenTo = [];
  for (let i = a; i <= b; i++) {
    if (i <= 1) {
      return false;
    }
    if (i % 2 === 0) {
      return false;
    }
  }
  return soNguyenTo = i;
  document.getElementById("result1").innerHTML = show;
}

function sum() {
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  for (let i = a; i <= b; i++) {
    if (i <= 1) {
      return false;
    }
    if (i % 2 === 0) {
      return false;
    }
  }
  s += i;
  return console.log(s);
  document.getElementById("result2").innerHTML = sum;
}
