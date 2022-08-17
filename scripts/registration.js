'use strict'
let emailRegistration = document.querySelector('#email-reg')
let passwordRegistration = document.querySelector('#password-reg')
let btnRegistration = document.querySelector('#btn-reg')
let errorEmailRegistration = document.querySelector('#email-empty')

let emailResult = ''
let passwordResult = ''

emailRegistration.addEventListener('input', (even) => {
  emailResult = even.target.value
})

passwordRegistration.addEventListener('input', (even) => {
  passwordResult = even.target.value
})


btnRegistration.addEventListener('click', (even) => {
  even.preventDefault()
  if (emailResult.length == '') {
    errorEmailRegistration.style.display = 'block'
    emailRegistration.style.borderColor = 'red'
  }
})