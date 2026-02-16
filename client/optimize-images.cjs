const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/assets/images');
const outputDir = path.join(__dirname, 'public/assets/images/optimized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, async (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.jpg'));
            
            try {
                // Determine which Jimp to use
                const jimpInstance = Jimp || require('jimp');

                const image = await jimpInstance.read(inputPath);
                
                // Assuming resize and quality might be async or return the instance
                // In v1, operations might mutate or return new instance
                // Let's try to await resize if it returns a promise
                // If it's chainable synchronously, await is harmless usually (transforms to promise)
                // But if it returns the image, good.
                
                // Documentation for v1 says methods like resize might be async? 
                // Let's try to chain assuming they return the image but maybe we need to await the write separately.
                
                // If resize returns a Promise, we must await it.
                // const resized = await image.resize({ w: 1200 }); // This might be the fix.
                
                // Let's try separating steps
                await image.resize({ w: 1200 });
                // Quality might be a setter or method
                // image.quality(80); // V0 style
                // V1 might be image.quality({ quality: 80 })? Or just property?
                // The previous error was on chaining.
                
                // Let's try:
                await image.write(outputPath, { quality: 80 }); 
                // If write takes options.
                
                console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
});
