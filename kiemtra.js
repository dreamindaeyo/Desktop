// let a = Number(document.getElementById("number1").value);
// let b = Number(document.getElementById("number2").value);
const a = 20;
const b = 50;
const soNguyenTo = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
};
const timSoNguyenTo = (num1,num2) =>{
    const res = [];
    while(num1<=num2){
        if (soNguyenTo(num1)){
            res.push(num2);
        };
        num1++
    }
};
console.log(timSoNguyenTo(a,b));

