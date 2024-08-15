// ## Написать фильтры для изображения в Canvas

// Необходимо написать функции, которые бы принимали ссылку на изображение или canvas и применяла бы к нему один из эффектов.
// Например, инверсия цветов или оттенки серого. Для реализации эффектов, необходимо использовать методы Canvas getImageData/putImageData
// и работа с цветами пикселей. Возвращать такая функция может ссылку на Canvas или ImageData.

// const grayscaled = grayscale('/myImage.jpeg');
// const inversed = inverse(grayscaled);

/**

const btn_inverse = document.getElementById('inverse')
const btn_grayscale = document.getElementById('grayscale')
const btn_reset = document.getElementById('reset')

const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
let imgData;

const img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuz93Fxf9lCbMrc_nVURGpjZkrxxX8ag1YDA&s';
img.crossOrigin = "Anonymous";


btn_reset.addEventListener('click', initialization)
function initialization() {
  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuz93Fxf9lCbMrc_nVURGpjZkrxxX8ag1YDA&s';
  img.crossOrigin = "Anonymous";

  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    imgData = ctx.getImageData(0, 0, c.width, c.height);
  }
}
initialization()


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

 */






// Написать функцию кодирования информации по схеме


// const schema = [
//   [3, 'number'],  // 3 бита число
//   [2, 'number'],  // 2 бита число
//   [1, 'boolean'], // 1 бит логический
//   [1, 'boolean'], // 1 бит логический
//   [16, 'ascii']  // 16 бит 2 аски символа
// ];

// Если данные не подходят схеме - выбрасывать исключения с пояснением.
// Результат - ArrayBuffer.
// const data = encode([2, 3, true, false, 'ab'], schema);

const schema = [
  [3, 'number'],  // 3 бита число
  [2, 'number'],  // 2 бита число
  [1, 'boolean'], // 1 бит логический
  [1, 'boolean'], // 1 бит логический
  [16, 'ascii']  // 16 бит 2 аски символа
];

function encode(data, schema) {
  let encodedArray = [];

  for (let i = 0; i < schema.length; i++) {
    switch (schema[i][1]) {
      case 'number':
        encodedArray.push(encodeInteger(schema[i][0], data[i]));
        break;
      case 'boolean':
        encodedArray.push(encodeBoolean(data[i]));
        break;
      case 'ascii':
        encodedArray.push(encodeAscii(data[i]));
        break;
    }
  }
  console.log(encodedArray);
}

const data = encode([2, 3, true, false, 'ab'], schema);

function encodeInteger(biteSizeController, dataValue) {
  if (biteSizeController >= dataValue.toString(2).length) return dataValue.toString(2)

  throw new Error(`Validation schema Error: length of integers bits is greater than ${biteSizeController}`);
}

function encodeBoolean(dataValue) {
  return (+dataValue).toString(2);
}

function encodeAscii(asciiChars) {
  let charBitesArray = [];
  for (const char of asciiChars) {
    charBitesArray.push((char.charCodeAt().toString(2)))
  }
  const charBites = charBitesArray.join('');
  if (charBites.length <= 16) return charBites;

  throw new Error('Validation schema Error: Bits length is greater than 16 bits')
}
