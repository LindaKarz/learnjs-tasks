function sumInput() {
  let arr = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(+value);
  }
  let result = 0;
  for (let number of arr) {
    result += number;
  }
  return result;
}
sumInput()