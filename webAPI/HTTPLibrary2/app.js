const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

const data = {
    name: 'Yo',
    username: 'yonigga',
    email: 'westcoast@thug.org'
};

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/8', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/8', data)
.then(data => console.log(data))
.catch(err => console.log(err));