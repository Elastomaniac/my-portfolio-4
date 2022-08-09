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

        console.log(body.data.reduce((acc, item) => acc+ item.first_name+ ' ' + item.last_name + ',', )`Наша база содержит данные следующих пользователей:`)
      })

      Object.keys(body).forEach(item =>
         console.log(item))
    })
    .catch((e) => {
      console.log(e)
    })

    



    
console.log('-----------')

console.log('Пункт №1:')

console.log('-----------')