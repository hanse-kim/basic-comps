import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/components/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), terser()],
  external: [/react.+/, /@emotion.+/],
};
