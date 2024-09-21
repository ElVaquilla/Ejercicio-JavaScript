import fetch from 'node-fetch';

// Filter para extraer los datos de un usuario
fetch('https://jsonplaceholder.typicode.com/todos/1/users')
    .then(response => response.json())
    .then((json) => {
      const user = json.filter(user => user.id === 1)
      console.log(user)
      })

// Filter para extraer los posts de un usuario
fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
      .then(response => response.json())
      .then((json) =>{
            const posts = json.filter(post => post.userId === 1)
            console.log(posts)
      })

// High-order functions Map-Filter-Reduce

fetch('https://jsonplaceholder.typicode.com/todos/1/users')
      .then(response => response.json())
      .then((json) => {
            const users = json.map((user) => ({
                  ...user,
                  address: {
                        ...user.address,
                        city: 'Madrid'
                  }
            }))
            console.log(users)
      })
      .then((json) =>{
            
      })
      