import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';
import pkg from './package.json';

const extensions = ['.js', '.ts', '.js', '.wasm'];

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
    resolve({ extensions, jsnext: true, main: true }),
    commonjs({
      extensions,
      transformMixedEsModules: true,
      include: '../node_modules/**',
    })
  ]
};
