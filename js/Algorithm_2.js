function getSquareRoot(x) {
  for (let i = 1; i < x; i++) {
    if (i * i > x) {
      console.log("вказане число", x, "квадратний корінь", i - 1);
      return i - 1;
    }
  }
}

getSquareRoot(1);
getSquareRoot(9);
getSquareRoot(7);
getSquareRoot(20);

document.querySelector("#function").textContent = `function getSquareRoot(x) {
  for (let i = 1; i < x; i++) {
    if (i * i > x) {
      return i - 1;
    }
  }
}`;
