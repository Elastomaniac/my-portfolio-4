'use strict'





fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body.data)
      body.data.forEach((item) => {
        console.log(item.last_name)

        body.data.filter (item => item.last_name.startsWith('F')).forEach(item=>{
        console.log(item.last_name)
        })
      })
    })
    .catch((e) => {
      console.log(e)
    })

    



    
console.log('-----------')

console.log('Пункт №1:')