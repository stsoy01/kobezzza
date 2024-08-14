const c = document.getElementById('canvas');
const ctx = c.getContext('2d');


const img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuz93Fxf9lCbMrc_nVURGpjZkrxxX8ag1YDA&s'
img.crossOrigin = "Anonymous";
img.height = 270

img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, c.width, c.height);
    console.log(imgData.data)
}


// const grayscaled = grayscale('/myImage.jpeg');
// const inversed = inverse(grayscaled);

// https://inspirnathan.com/posts/105-fix-tainted-canvas-from-cross-origin-error
