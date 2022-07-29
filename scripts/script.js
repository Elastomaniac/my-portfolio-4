'use strict'

let data = prompt('Угадай число от 1 до 10', 1)
let prNum = Math.floor((Math.random() * 10) + 1)

if (data == prNum) {
  alert('Вы угадали!')
} else if (data < prNum) {
  alert('Ваше число меньше загаданного компьютером')
} else if (data > prNum){
  alert('Ваше число больше загаданного компьютером')
} else {
  alert('Введи число!')
}

//Замыкание

const funcOne = () => {
  let num = 4
  let user = prompt('Угадайте загаданное число')

  const funcTwo = () => {
    
    if(num > user) {
      alert('Загаданное число меньше')
    } else if (num < user) {
      alert('Загаданное число больше')
    } else if (num == user) {
      alert('Поздравляю, Вы угадали!!!')
    } else {
      alert('Введи число!')
    }
    return
  }
  funcTwo()
}
funcOne()