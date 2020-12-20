import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import wasm from '@rollup/plugin-wasm';
import pkg from './package.json';

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      sourcemap: 'inline',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: pkg.module,
      sourcemap: 'inline',
      format: 'es',
      exports: 'default'
    }
  ],
  plugins: [
    wasm(),
    typescript(),
    resolve({ extensions }),
  ]
};
