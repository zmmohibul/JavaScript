function changeBackgroundColor(element, interval, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.style.backgroundColor = color;
            resolve();
        }, interval);
    })
}

changeBackgroundColor(document.body, 1000, 'red')
    .then(() => changeBackgroundColor(document.body, 1000, 'orange'))
    .then(() => changeBackgroundColor(document.body, 1000, 'yellow'))
    .then(() => changeBackgroundColor(document.body, 1000, 'green'))
    .then(() => changeBackgroundColor(document.body, 1000, 'blue'))
    .then(() => changeBackgroundColor(document.body, 1000, 'indigo'))
    .then(() => changeBackgroundColor(document.body, 1000, 'violet'));
