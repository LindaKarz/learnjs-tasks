let number = prompt ('Введите число', '');

if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      alert ('Составное число');
    }
  }
  alert ('Простое число');
} else {
  alert ('Введите число больше 1');
}

