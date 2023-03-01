function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (x < a || x > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
