const btn_inverse = document.getElementById('inverse')
const btn_grayscale = document.getElementById('grayscale')

const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
let imgData;

const img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuz93Fxf9lCbMrc_nVURGpjZkrxxX8ag1YDA&s';
img.crossOrigin = "Anonymous";

img.onload = () => {
  ctx.drawImage(img, 0, 0);
  imgData = ctx.getImageData(0, 0, c.width, c.height);
}



btn_inverse.addEventListener('click', inverse)
function inverse() {
  for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255 - imgData.data[i];
    imgData.data[i + 1] = 255 - imgData.data[i + 1];
    imgData.data[i + 2] = 255 - imgData.data[i + 2];
    imgData.data[i + 3] = 255;
  }

  ctx.putImageData(imgData, 0, 0);

}

btn_grayscale.addEventListener('click', grayscale)
function grayscale() {
  for (let i = 0; i < imgData.data.length; i += 4) {
    const grayScaleMask = (imgData.data[i] * 6969 + imgData.data[i + 1] * 23436 + imgData.data[i + 2] * 2366) >> 15;
    imgData.data[i] = grayScaleMask;
    imgData.data[i + 1] = grayScaleMask;
    imgData.data[i + 2] = grayScaleMask;
  }

  ctx.putImageData(imgData, 0, 0);
}
// const grayscaled = grayscale('/myImage.jpeg');
// const inversed = inverse(grayscaled);

// https://inspirnathan.com/posts/105-fix-tainted-canvas-from-cross-origin-error
