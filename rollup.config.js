import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    copy({ targets: [{ src: './package.json', dest: './dist' }] }),
    typescript(),
    terser(),
  ],
  external: [/react.+/, /@emotion.+/],
};
