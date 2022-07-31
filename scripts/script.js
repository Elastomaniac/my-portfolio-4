'use strict'

// let data = prompt('Угадай число от 1 до 10', 1)
// let prNum = Math.floor((Math.random() * 10) + 1)

// if (data == prNum) {
//   alert('Вы угадали!')
// } else if (data < prNum) {
//   alert('Ваше число меньше загаданного компьютером')
// } else if (data > prNum){
//   alert('Ваше число больше загаданного компьютером')
// } else {
//   alert('Введи число!')
// }

//Замыкание

// const funcOne = () => {
//   let num = 4
//   let user = +prompt('Угадайте загаданное число от 1 до 10')

//   const funcTwo = () => {
    
//     if(num > user) {
//       alert('Загаданное число меньше')
//     } else if (num < user) {
//       alert('Загаданное число больше')
//     } else if (num == user) {
//       alert('Поздравляю, Вы угадали!!!')
//     } else {
//       alert('Введи число!')
//     }
//     return
//   }
//   funcTwo()
// }
// funcOne()


let prNum, tempOut

prNum = Math.floor((Math.random() * 10) +1)
// tempOut = document.getElementById('temp-out')
// tempOut.innerHTML = prNum
console.log(prNum)

function f1() {
  let num, out

  num = document.getElementById('mynum').value
  out = document.getElementById('out')

  if (num == prNum) {
    out.innerHTML = 'Вы угадали!'
  } else if (num > prNum) {
    out.innerHTML = 'Вы ввели число больше, чем нужно!'
  } else if (num < prNum) {
    out.innerHTML = 'Вы ввели число меньше, чем нужно!'
  } else {
    out.innerHTML = 'Введите число от 1 до 10'
  }

}