import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/components/index.ts',
    output: {
      dir: 'dist',
      sourcemap: true,
    },

    plugins: [
      copy({
        targets: [{ src: './package.json', dest: './dist' }],
      }),
      typescript(),
      terser(),
    ],
    external: [/react.+/, /@emotion.+/],
  },
  {
    input: 'src/components/index.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
    ],
    external: [/react.+/, /@emotion.+/],
  },
];
