function Calculator() {
  this.sum = function() {
    return this.a + this.b;
  },
  this.mul = function() {
    return this.a * this.b;
  },
  this.read = function() {
    this.a = +prompt('Введи число a?', 0);
    this.b = +prompt('Введи число b?', 0);
  }
};

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());