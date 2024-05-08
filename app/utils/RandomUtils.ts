
let seed = Math.floor(Date.now())

function randomUtils() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

export function getRandomTarot() {
    return Math.floor(randomUtils() * 78) + 1
}


export function getRandomGuas() {
    let images = ""
    for (let i = 0; i < 6; i++) {
        images += Math.round(randomUtils())
    }
    return images
}
