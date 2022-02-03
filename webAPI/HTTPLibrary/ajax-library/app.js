const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

const data = {
    title: 'Custom Post',
    body: 'This is custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post)
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});