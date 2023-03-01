function getMaxSubSum(arr) {
  let maxSum= 0;
  for (let i = 0; i < arr.length; i++) {
    let x = 0;
    for (let j = i; j < arr.length; j++) {
      x += arr[j];
      maxSum = Math.max(maxSum, x);
    }
  }
  return maxSum;
}