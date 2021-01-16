const btn = document.querySelector('button');

function moveX(element, amount, interval) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let elementRight = element.getBoundingClientRect().right;
            let elementLeft = element.getBoundingClientRect().left
            let bodyBoundary = document.body.clientWidth;

            if (elementRight + amount > bodyBoundary) {
                reject({elementLeft, amount, bodyBoundary});
            } else {
                element.style.transform = `translateX(${amount + elementLeft}px)`;
                resolve();
            }

        }, interval);
    })
}

moveX(btn, 100, 1000).then(() => {
    console.log("Yay! It worked!!! Element moved...");
    return moveX(btn, 100, 1000)
}).then(() => {
    console.log("Wohoo! It worked again!!!");
    return moveX(btn, 100, 1000)
}).then(() => {
    console.log("Wohoo! It worked again!!!");
    return moveX(btn, 100, 1000)
}).then(() => {
    console.log("Wohoo! It worked again!!!");
    return moveX(btn, 100, 1000)
}).then(() => {
    console.log("Wohoo! It worked again!!!");
    return moveX(btn, 100, 1000)
}).then(() => {
    console.log("Wohoo! It worked again!!!");
}).catch((res) => {
    console.log(`The right most side of the element is at ${res.elementLeft} and body boundary is ${res.bodyBoundary}.`);
    console.log(`So... Can't move by ${res.amount} pixels...`);
})