function reverseNumber(num) {
  console.log(num);
  let resultNuber = "";
  num = String(checkLastZerro(num));
  num = String(checkIsNegative(num));
  for (let i = num.length - 1; i >= 0; i--) {
    resultNuber += num[i];
  }
  console.log(Number(resultNuber));
  return Number(resultNuber);
}

function checkLastZerro(num) {
  num = String(num);
  for (let i = num.length - 1; i > 0; i--) {
    if (num[num.length - 1] === "0") {
      num = num.slice(0, num.length - 1);
    }
  }
  return num;
}

function checkIsNegative(num) {
  num = String(num);
  if (num[0] === "-") {
    num = num.slice(1, num.length) + "-";
  }
  return num;
}

// reverseNumber(12356);
// reverseNumber(-12356);
// reverseNumber(1542356);
// reverseNumber(-123560000);
