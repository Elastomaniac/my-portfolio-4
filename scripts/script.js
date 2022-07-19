'use strict'

let money = 80000
let profit = "15000"
let expenses = "Питание 10000, Проезд 5000"
const purpose = 500000
const period = 6

console.log(typeof money)
console.log(typeof profit)
console.log(expenses.length)
console.log(`Период равен ${period} месяцев`)
console.log(`Цель заработать ${purpose} рублей`)

let budgetDay = (money + (+profit))/30
console.log(budgetDay)


console.log(expenses.toLowerCase())
let arr = expenses.split("")
console.log(arr)