const c = document.getElementById('canvas')

const ctx = c.getContext('2d');
const img = new Image(600, 300)
img.src = './hanako.png'


ctx.drawImage(img, 0, 0);


const imgData = ctx.getImageData(0, 0, c.width, c.height);
ctx.putImageData(img, 0, 0)


