const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const data = {
    name: 'Gates',
    email: 'microsoft@yo.nigga'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(res => console.log('User deleted...'))
    .catch(err => console.log(err))
