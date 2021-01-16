// function fakeRequest (url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let pages = {
//                 '/users' : [
//                     {id: 1, username: 'Mohib'},
//                     {id: 2, username: 'Farhat'}
//                 ],
//                 '/about' : 'This is the about page!'
//             };
//
//             let data = pages[url];
//             if (data) {
//                 resolve({status: 200, data});
//             } else {
//                 reject({status: 404, messege: `${url} page not found`});
//             }
//         }, 1800);
//     });
// }
//
// fakeRequest('/user').then((res) => {
//     console.log(res);
// }).catch((res) => {
//     console.log(res);
// })


// fakeRequest('/users').then((res) => {
//     console.log(res);
//     console.log(res.data);
//     console.log(res.data[0]);
//     console.log(res.data[0].id);
//     let id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then((res) => {
//         console.log(res);
//         fakeRequest(`/posts/${res.data.topPostId}`).then((res) => {
//             console.log(res);
//         }).catch((res) => {
//             console.log(res);
//         })
//     }).catch((res) => {
//         console.log(res);
//     })
// }).catch((res) => {
//     console.log(res);
// })





function fakeRequest (url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users'        : [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmerelda' }
                ],
                '/users/1'      : {
                    id        : 1,
                    username  : 'Bilbo',
                    upvotes   : 360,
                    city      : 'Lisbon',
                    topPostId : 454321
                },
                '/users/5'      : {
                    id       : 5,
                    username : 'Esmerelda',
                    upvotes  : 571,
                    city     : 'Honolulu'
                },
                '/posts/454321' : {
                    id    : 454321,
                    title :
                        'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about'        : 'This is the about page!'
            };

            let data = pages[url];
            if (data) {
                resolve({status: 200, data});
            } else {
                reject({status: 404, messege: `${url} page not found`});
            }
        }, 1800);
    });
}


fakeRequest('/users').then((res) => {
    console.log(res);
    return fakeRequest(`/users/${res.data[0].id}`)
}).then((res) => {
    console.log(res);
    return fakeRequest(`/posts/${res.data.topPostId}`)
}).then((res) => {
    console.log(res);
}).catch((res) => {
    console.log(res);
})

