import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sizeOf from 'image-size';

// Define __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your JSX file (main index.tsx)
const jsxFilePath = path.join(__dirname, 'src/routes/index.tsx');

// Path to the directory where your images are stored
const publicDir = path.join(__dirname, 'public/assets/img');

// Read the JSX file
fs.readFile(jsxFilePath, 'utf-8', (err, jsxContent) => {
  if (err) {
    console.error('Error reading the JSX file:', err);
    return;
  }

  // Regular expression to find <img> tags in JSX
  const imgTagRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/g;
  let updatedJsxContent = jsxContent;

  // Match each <img> tag in the JSX file
  let match;
  while ((match = imgTagRegex.exec(jsxContent)) !== null) {
    const imgTag = match[0]; // Full <img> tag
    const imgSrc = match[1]; // The src attribute value

    // Get the full path of the image file in public/assets/img
    const imgFilePath = path.join(publicDir, imgSrc);

    // Check if the image file exists and get its dimensions
    if (fs.existsSync(imgFilePath)) {
      const dimensions = sizeOf(imgFilePath);
      const width = dimensions.width;
      const height = dimensions.height;

      // Update the <img> tag by inserting width and height attributes
      const updatedImgTag = imgTag.replace(
        '<img',
        `<img width="${width}" height="${height}"`
      );

      // Replace the original <img> tag with the updated one in the JSX content
      updatedJsxContent = updatedJsxContent.replace(imgTag, updatedImgTag);
    } else {
      console.warn(`Image not found: ${imgSrc}`);
    }
  }

  // Write the updated JSX content back to the file
  fs.writeFile(jsxFilePath, updatedJsxContent, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing the updated JSX file:', err);
    } else {
      console.log('JSX file successfully updated with image dimensions!');
    }
  });
});
