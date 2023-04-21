'use strict'

let prNum, tempOut, attempts = 10

prNum = Math.floor((Math.random() * 10) +1)
// tempOut = document.getElementById('temp-out')
// tempOut.innerHTML = prNum
console.log(prNum)


function startGame(num, out) {
  attempts--

  num = document.getElementById('mynum').value
  out = document.getElementById('out')

  if (num == prNum) {
    out.innerHTML = 'Вы угадали!'
  } 
  if (attempts===0) {
    out.innerHTML = 'У Вас закончились попытки, хотите сыграть еще?'
    return
  }

  else if (num > prNum) {
    console.log(attempts)
    out.innerHTML = `Вы ввели число больше, чем нужно! У Вас осталось ${attempts} попыток`
  } else if (num < prNum) {
    out.innerHTML = `Вы ввели число меньще, чем нужно! У Вас осталось ${attempts} попыток`
  } else {
    out.innerHTML = 'Введите число от 1 до 10'
  }

}