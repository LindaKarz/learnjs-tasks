let x = prompt('Введи x', '')
let n = prompt('Введи n', '')

function pow(x,n) {
  if (n < 1) {
    alert ('n не может быть меньше 1')
  } else if (n % 1 !== 0) {
    alert ('n может быть только целым числом')
  } else {
    alert (Math.pow(x,n))
  }
}

pow(x,n)