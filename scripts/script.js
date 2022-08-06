'use strict'

let money = +prompt('Ваш месячный доход?') 
while (isNaN(money)) {
  alert ('Введите число');
  money = +prompt('Ваш месячный доход?') 
}


let amount = +prompt('Во сколько обойдуться обязательные статьи расходов?')
while (isNaN(amount)) {
  alert ('Введите число');
  amount = +prompt('Во сколько обойдуться обязательные статьи расходов?') 
}

let purpose = +prompt('сколько Вы хотите накопить?')

let extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ?`)
while (isNaN(extraMoney)) {
  alert ('Введите число');
  extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ?`) 
}





function getAccumulatedIncome (money, amount, extraMoney) {
  let result = money - amount + extraMoney
  return result
}

let accumulatedIncome = getAccumulatedIncome(money, amount, extraMoney)
let months = purpose / accumulatedIncome
console.log(Math.ceil(months))

function getTargetMonth (purpose, accumulatedIncome) {
  return Math.ceil (purpose/accumulatedIncome)
}


console.log(purpose)
console.log(accumulatedIncome)
let targetMonth = getTargetMonth(purpose, accumulatedIncome)

console.log('getTargetMonth', targetMonth)

if (targetMonth > 0) console.log ('Цель не будет достигнута')

let budgetDay = (money - amount + extraMoney) / 30 




console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', accumulatedIncome)

console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, targetMonth + ' месяца')

console.log('Дневной бюджет', budgetDay)