'use strict'
const money = +prompt('Ваш месячный доход?')

const amount = +prompt('Во сколько обойдуться обязательные статьи расходов?')

const purpose = +prompt('сколько Вы хотите накопить?')

const extraMoney = +prompt(`Перечислите возможный доход за ваши дополнительные работы: ?`)

function getAccumulatedIncome (money, amount, extraMoney) {
}

const accumulatedIncome = getAccumulatedIncome(money - amount + extraMoney)
const months = purpose / accumulatedIncome 
console.log(Math.ceil(months))

function getTargetMonth () {

}

const budgetDay = (money - amount + extraMoney) / 30 

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome())

console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца')

console.log('Дневной бюджет', budgetDay)