import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

let plugins = [
  nodeResolve({
    browser: true,
    extensions: ['.js', '.json', '.css'],
  }),
  commonjs(),
  terser(),
];
export default {
  input: './index.js',
  output: {
    dir: 'public',
    format: 'iife',
    sourcemap: false,
    entryFileNames: '[name].[hash].js',
    chunkFileNames: '[name].[hash].js',
  },
  plugins,
};
