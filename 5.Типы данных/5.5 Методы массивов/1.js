function camelize(str) {
  let arr = str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  let result = arr.join('');
  return result
}