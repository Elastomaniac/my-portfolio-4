'use strict'
fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json()
    })
    .then((body) => {
      console.log(body.data)
      const filterResult = body.data.filter(item => item.last_name.startsWith('F')).forEach(el => console.log(el.last_name))

    })
    .catch((e) => {
      console.log(e)
    })