function checkSpam(str) {
  let newString = str.toLowerCase();
  return (newString.includes('viagra') || newString.includes('xxx')) ? true : false;
}