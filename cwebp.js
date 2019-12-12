const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
 
imagemin(['./input/*.{jpg,png}'], './output', {
    use: [
        imageminWebp({quality: 100})
    ]
}).then(() => {
    console.log('Images optimized');
});
