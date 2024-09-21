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
            const users = json
            .map((user) => ({             // Cambiamos todas las ciudades de los usuarios a Madrid
                  ...user,
                  address: {
                        ...user.address,
                        city: 'Madrid'
                  }
            }))
            .filter((user) => user.address.suite.includes('Suite'))     // Filtramos las direcciones para obtener usuarios que se hospeden en Suites
            .sort((a, b) => a.name > b.name ? 1 : -1)                   // Ordenamos a los usuarios por orden alfabético
            console.log(users)
      })
      