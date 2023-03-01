let calculator = {
  a: '',
  b: '',
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('Введи число a?', 0);
    this.b = +prompt('Введи число b?', 0);
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());