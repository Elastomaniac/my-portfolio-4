'use strict'
fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      console.log('-----------')

      console.log('Пункт №1:')

      console.log('-----------')
      return res.json()
      
    })
    .then((body) => {
      console.log(body.data)
        console.log(body.data.filter(item => item.last_name.startsWith('F')).reduce((acc, item) => acc + item.first_name + ' ' + item.last_name + ', ', ''))

        console.log('Наша база содержит данные следующих пользователей: ' + body.data.reduce((acc, item) => acc + item.first_name + ' ' + item.last_name + ', ', ''))

        console.log(Object.keys(body.data))
    })
    .catch((e) => {
      console.log(e)
    })