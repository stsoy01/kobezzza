const c = document.getElementById('canvas');
const ctx = c.getContext('2d');


const img = new Image();
img.src = './hanako.png'
img.onload = () => {
    ctx.drawImage(img, 0, 0);
}


const imgData = ctx.getImageData(0, 0, c.width, c.height);
console.log(imgData)
