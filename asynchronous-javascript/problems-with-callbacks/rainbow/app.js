// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000);
// },1000)

function changeBackgroundColor(element, color, interval, callback) {
    setTimeout(() => {
        element.style.backgroundColor = color;
        if (callback) {
            callback();
        }
    }, interval)
}

changeBackgroundColor(document.body, 'red', 1000, () => {
    changeBackgroundColor(document.body, 'orange', 1000, () => {
        changeBackgroundColor(document.body, 'yellow', 1000, () => {
            changeBackgroundColor(document.body, 'green', 1000, () => {
                changeBackgroundColor(document.body, 'blue', 1000, () => {
                    changeBackgroundColor(document.body, 'indigo', 1000, () => {
                        changeBackgroundColor(document.body, 'violet', 1000);
                    });
                });
            });
        });
    });
});