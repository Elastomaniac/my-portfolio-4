'use strict'


console.log('-----------');

console.log('Пункт №1:')


fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body.data)
      body.data.forEach((item) => {
        if (item.first_name.length < 5) {
        console.log(item.first_name)
        }
      })
    })
    .catch((e) => {
      console.log(e)
    })


    
console.log('-----------');

console.log('Пункт №2:')