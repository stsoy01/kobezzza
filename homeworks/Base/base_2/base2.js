const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

const img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuz93Fxf9lCbMrc_nVURGpjZkrxxX8ag1YDA&s'
img.crossOrigin = "Anonymous";

img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, c.width, c.height);

    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i + 3] = 255;
    }

    setTimeout(() => {
        ctx.putImageData(imgData, 0, 0);
    }, 2000)
}

function imageInitialization() {

}

function grayscale() {

}

function inverse() {

}


// const grayscaled = grayscale('/myImage.jpeg');
// const inversed = inverse(grayscaled);

// https://inspirnathan.com/posts/105-fix-tainted-canvas-from-cross-origin-error
