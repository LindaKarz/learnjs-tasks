function randomInteger(min, max) {
  let randomNumber = Math.random() * ((max + 1) - min) + min;
  return Math.floor(randomNumber);
}