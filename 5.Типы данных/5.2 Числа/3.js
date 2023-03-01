function readNumber() {
  let x = prompt('Введите число', 0)
  if (x == null || x == '') {
    return (null);
  } else if (isFinite(x)) {
    return (x)
  } else {
    readNumber()
  }
}

readNumber()