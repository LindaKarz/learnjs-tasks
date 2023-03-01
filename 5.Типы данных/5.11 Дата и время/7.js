function getSecondsToTomorrow() {
  let nowTime = new Date();
  let tomorrow = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate() + 1);
  let diff = tomorrow - nowTime;
  return Math.round(diff / 1000);
}