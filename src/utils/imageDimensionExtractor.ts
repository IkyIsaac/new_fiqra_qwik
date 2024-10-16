import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);

export const generateHTMLWithDimensionsFromDirectory = async (directoryPath: string): Promise<string> => {
    // Resolve the absolute path to the public/assets/img directory
    const absolutePath = path.join(process.cwd(), 'public', directoryPath);
    
    // Read all folders in the directory
    const folders = await fs.promises.readdir(absolutePath);
    const imageHtml: string[] = [];

    for (const folder of folders) {
        const folderPath = path.join(absolutePath, folder);
        const files = await fs.promises.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            // Use exec to get image dimensions
            try {
                const { stdout } = await execAsync(`identify -format "%w %h" "${filePath}"`); // Using ImageMagick
                const [width, height] = stdout.trim().split(' ');

                // Create an HTML img tag
                imageHtml.push(`<img src="/assets/img/${folder}/${file}" width="${width}" height="${height}" alt="${file}" />`);
            } catch (error) {
                console.error(`Error getting dimensions for ${filePath}:`, error);
            }
        }
    }

    return imageHtml.join('');
};
