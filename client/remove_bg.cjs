const Jimp = require('jimp');

async function removeWhiteBackground() {
  try {
    const image = await Jimp.read('public/cleanvestment logo.png');
    
    const targetColor = { r: 255, g: 255, b: 255 };
    const tolerance = 15; // To catch off-whites and anti-aliasing artifacts

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const dist = Math.sqrt(
        Math.pow(r - targetColor.r, 2) +
        Math.pow(g - targetColor.g, 2) +
        Math.pow(b - targetColor.b, 2)
      );

      if (dist < tolerance) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel = 0
      }
    });

    await image.writeAsync('public/cleanvestment_logo_transparent.png');
    console.log('Image processing successful: cleanvestment_logo_transparent.png created');
  } catch (err) {
    console.error('Error during image processing:', err);
  }
}

removeWhiteBackground();
