'use strict'
const money = +prompt('Ваш месячный доход?')
// const expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую')
const amount = +prompt('Во сколько обойдуться обязательные статьи расходов?')
// const deposit = confirm('Есть ли у вас вклад в банке?')
const purpose = +prompt('сколько Вы хотите накопить?')

// const budgetDay = (money - amount) / 30
// console.log(Math.floor(budgetDay))

// if (budgetMonth > 60000 ) {
//   alert('У вас высокий уровень дохода')
// } else if (budgetMonth > 30000 && budgetMonth < 60000) {
//   alert('У вас средний уровень дохода')
// } else if (budgetMonth > 0 && budgetMonth < 30000) {
//   alert('К сожалению у вас уровень дохода ниже среднего')
// } else {
//   alert('Что то пошло не так')
// }

const extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ?`)

function getAccumulatedIncome (money, amount, extraMoney) {
}

const accumulatedIncome = getAccumulatedIncome(money - amount + extraMoney)
const months = purpose / accumulatedIncome 
console.log(Math.ceil(months))