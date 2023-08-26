import fs from 'fs';
import path from 'path';

export function upload(base64: string, uploadFolder: string = '') {
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');

  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(7);
  const filename = `${timestamp}_${randomString}.webp`;

  const filePath = path.join(__dirname, '../../public/uploads', uploadFolder, filename);
  fs.writeFileSync(filePath, buffer);
  return filename;
}

export function download(filename: string, downloadFolder: string = '') {
  const filePath = path.join(__dirname, '../../public/uploads', downloadFolder, filename);
  const fileData = fs.readFileSync(filePath);
  const base64Image = fileData.toString('base64');
  return base64Image;
}
