'use strict'





fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body.data)
      body.data.forEach((item) => {
        console.log(item.last_name)
      })
    })
    .catch((e) => {
      console.log(e)
    })

    
console.log('-----------')

console.log('Пункт №1:')
    
console.log('-----------')

console.log('Пункт №2:')