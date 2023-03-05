import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const getFiles = (folderPath) => {
  return fs.readdirSync(folderPath).flatMap((fileName) => {
    const filePath = path.join(folderPath, fileName);
    if (fs.statSync(filePath).isDirectory()) {
      return getFiles(filePath);
    } else {
      return {
        fileName: filePath
          .replace(path.join(__dirname, 'src/'), '')
          .replace('.ts', ''),
        filePath,
      };
    }
  });
};

const inputFiles = getFiles(path.join(__dirname, 'src'));
console.log(inputFiles);

export default {
  input: Object.fromEntries(
    inputFiles
      .filter(({ filePath }) => filePath.endsWith('index.ts'))
      .map(({ fileName, filePath }) => [fileName, filePath])
  ),
  output: [
    {
      dir: 'dist',
      format: 'esm',
    },
  ],
  plugins: [typescript(), terser()],
  external: [/react.+/, /@emotion.+/],
};
