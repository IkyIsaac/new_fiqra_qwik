import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

const imagesDirectory = path.join(process.cwd(), 'public/assets/img'); // Use process.cwd() to get the current working directory
const outputFilePath = path.join(process.cwd(), 'imageData.json');

function getAllImageFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllImageFiles(file)); // Recursion for subdirectories
        } else if (file.match(/\.(jpg|jpeg|png|gif)$/)) {
            results.push(file);
        }
    });
    return results;
}

function extractImageDimensions() {
    const images = getAllImageFiles(imagesDirectory).map(filePath => {
        const dimensions = sizeOf(filePath);
        return {
            src: filePath.replace(`${process.cwd()}/public`, ''), // Adjust path for usage in Qwik
            width: dimensions.width,
            height: dimensions.height,
        };
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2));
    console.log('Image dimensions extracted successfully!');
}

extractImageDimensions();
