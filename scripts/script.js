'use strict'
fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body.data)
        console.log(body.data.filter(item => item.last_name.startsWith('F')).reduce((acc, item) => acc + item.first_name + ' ' + item.last_name + ', ', ''))

        console.log('Наша база содержит данные следующих пользователей: ' + body.data.reduce((acc, item) => acc + item.first_name + ' ' + item.last_name + ', ', ''))
    })
    .catch((e) => {
      console.log(e)
    })