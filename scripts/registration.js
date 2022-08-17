'use strict'
let emailRegistration = document.querySelector('#email-reg')
let passwordRegistration = document.querySelector('#password-reg')
let btnRegistration = document.querySelector('#btn-reg')
let errorEmailRegistration = document.querySelector('#email-empty')
let errorPasswordRegistration = document.querySelector('#password-empty')

let emailResult = ''
let passwordResult = ''

emailRegistration.addEventListener('input', (even) => {
  emailResult = even.target.value.trim()
})

passwordRegistration.addEventListener('input', (even) => {
  passwordResult = even.target.value.trim()
})

btnRegistration.addEventListener('click', (even) => {
  even.preventDefault()
  validRegistration()
})

const validRegistration = () => {
  if (emailResult.length == '') {
    errorEmailRegistration.style.display = 'block'
    emailRegistration.style.borderColor = 'red'
  } else {
    errorEmailRegistration.style.display = 'none'
    emailRegistration.style.borderColor = 'inherit'
  }

  if (passwordResult.length == '') {
    errorPasswordRegistration.style.display = 'block'
    passwordRegistration.style.borderColor = 'red'
  } else {
    errorPasswordRegistration.style.display = 'none'
    passwordRegistration.style.borderColor = 'inherit'
  }
}

