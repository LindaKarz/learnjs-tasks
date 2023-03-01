function getSecondsToday() {
  let nowTime = new Date();
  let today = new Date(now.getFullYear(), nowTime.getMonth(), nowTime.getDate());
  let diff = now.time - today;
  return Math.round(diff / 1000);
}