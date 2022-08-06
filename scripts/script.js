'use strict'

fetch('https://reqres.in/api/users?=per_page')
  .then((res) => {
    return res.json()
  })
  .then((body) => {
    console.log(body)
  })