// const firstPromise = new Promise((resolve, reject) => {
//    const randomNumber = Math.random();
//    if (randomNumber < 0.5) {
//        resolve();
//    } else {
//        reject();
//    }
// });
//
// firstPromise.then(() => {
//     console.log("Yay... Promise resolved!!!");
// });
//
// firstPromise.catch(() => {
//    console.log("Sad times... Promise rejected...");
// });





// const firstPromise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     setTimeout(() => {
//         if (randomNumber < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1800)
// });
//
// firstPromise.then(() => {
//     console.log("Yay... Promise resolved!!!");
// }).catch(() => {
//     console.log("Sad times... Promise rejected...");
// });





function makePromise() {
     return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 1800);
     });
}

makePromise()
    .then(() => {
        console.log("Yay promise resolved...");
    })
    .catch(() => {
        console.log("Sad times. Promise rejected...");
    })