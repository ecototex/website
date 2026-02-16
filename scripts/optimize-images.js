const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../client/public/assets/images');
const outputDir = path.join(__dirname, '../client/public/assets/images/optimized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(inputDir, file);
            // Jimp doesn't support writing webp consistently across versions without plugins, 
            // so we will sticking to high quality JPEG/PNG resizing which is still huge savings 
            // over the original 9MB files.
            // Wait, actually let's try to just resize and compress significantly.
            // We will stick to the original extension but optimized.
            // Actually, let's try to save as .jpg for max compression if it's opaque.
            
            // To match the previous 'webp' change in bags.ts, we should try to save as .png or .jpg but named .webp? 
            // No that's bad. 
            // I'll revert bags.ts changes? No, I want .webp.
            // Jimp support for webp is tricky.
            
            // ALTERNATIVE: Use a pre-compiled binary tool like ffmpeg if available? No.
            // Let's go back to basics. The user wants speed.
            // Resizing 9MB png to 1200px jpg is fine.
            // I will updated bags.ts to use .jpg if I can't do webp.
            
            // Let's try 'sharp' one last time with a different approach? No.
            // Let's use 'jimp' to resize and save as .jpg (much smaller than png).
            // I will update bags.ts to point to .jpg instead of .webp.
            
            const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.jpg'));

            Jimp.read(inputPath)
                .then(image => {
                    return image
                        .resize(1200, Jimp.AUTO) // Resize max width
                        .quality(80) // set JPEG quality
                        .writeAsync(outputPath); // save
                })
                .then(() => {
                    console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`);
                })
                .catch(err => {
                    console.error(`Error processing ${file}:`, err);
                });
        }
    });
});
