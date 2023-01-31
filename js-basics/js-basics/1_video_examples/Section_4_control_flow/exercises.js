//ex Ladscape or Portrait
function isLandscape(width, height) {
    if (width > height) {
        return true
    } else {
        return false
    }
}
console.log(isLandscape(200,500))

function isLandscape1(w, d) {
    return w > d 
}

console.log(isLandscape1(800,500))

const portrait = (w1, d1) => w1 > d1;
console.log(portrait(10, 50))