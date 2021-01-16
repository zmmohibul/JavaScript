const btn = document.querySelector('button');

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);





// function moveX(element, amount, interval, callback) {
//     setTimeout(() => {
//         element.style.transform = `translateX(${amount}px)`;
//         if (callback) {
//             callback();
//         }
//     }, interval);
// }

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//             moveX(btn, 400, 1000, () => {
//                 moveX(btn, 500, 1000);
//             });
//         });
//     });
// }); 





// function moveX(element, amount, interval, callback) {
//     setTimeout(() => {
//         let elementRight = element.getBoundingClientRect().right;
//         let elementLeft = element.getBoundingClientRect().left
//         let bodyBoundary = document.body.clientWidth;
//         element.style.transform = `translateX(${amount + elementLeft}px)`;
//         if (callback) {
//             callback();
//         }
//     }, interval);
// }

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 100, 1000);
//             });
//         });
//     });
// }); 





function moveX(element, amount, interval, successCallback, failureCallback) {
    setTimeout(() => {
        let elementRight = element.getBoundingClientRect().right;
        let elementLeft = element.getBoundingClientRect().left
        let bodyBoundary = document.body.clientWidth;

        if (elementLeft + amount > bodyBoundary) {
            failureCallback();
        } else {
            element.style.transform = `translateX(${amount + elementLeft}px)`;
            successCallback();
        }

    }, interval);
}

moveX(btn, 300, 1000, () => {
    console.log("Good Work! Element Moved by given amount of Pixels!");
    moveX(btn, 300, 1000, () => {
        console.log("Good Grace! Element Moved again! WoW!!!");
        moveX(btn, 300, 1000, () => {
            console.log("Boy oh boy! Moved again? Man! You really have a wide screen...");
        }, () => {
            console.log("Not enough space bud. Not enough space...")
        })
    }, () => {
        console.log("Sorry bud, can't move. Not enough room.")
    });
}, () => {
    console.log("Not enough space to move buddy...");
});