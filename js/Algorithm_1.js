function toggleVariable(x, y) {
  console.log("Value before function:", "x:", x, "y:", y);
  x += y;
  console.log("Step 1:", "x:", x, "y:", y);
  y = x - y;
  console.log("Step 2:", "x:", x, "y:", y);
  x = x - y;
  console.log("Step 3:", "x:", x, "y:", y);
  console.log("Value after function:", "x:", x, "y:", y);
}

toggleVariable(3, 6);
toggleVariable(9, 15);
toggleVariable(1, 10);

function toggleVariableWithLS(x, y) {
  localStorage.setItem("x", x);
  localStorage.setItem("y", y);
  x = localStorage.getItem("y");
  y = localStorage.getItem("x");
  console.log(`toggleVariableWithLS: x: ${x}, y: ${y}`);
}

toggleVariableWithLS(3, 6);
