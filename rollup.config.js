import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';
import pkg from './package.json';

const extensions = ['.js', '.cjs', '.js', '.wasm'];

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    sourcemap: 'inline',
    format: 'cjs',
  },
  plugins: [
    wasm(),
    typescript(),
    resolve(),
    commonjs({
      extensions,
      include: 'node_modules/**',
    })
  ]
};
