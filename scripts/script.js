'use strict'

let email = document.querySelector('#idemail')
console.log(email)
email.innerHTML = "<em>Новый заголовок</em>"

let span = document.createElement('span')
// создал спан
span.className = "text-span"
// присквоил класс
span.innerHTML = 'всем привет'
// задал текст внутри спана
document.body.append(span)
// положил спан в конец боди

let submit = document.querySelector('.form_submit')
console.log(submit)

