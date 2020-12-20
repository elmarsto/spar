import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';

export default {
  input: {
    main: 'src/index.ts',
  },
  output: {
    dir: 'dist/',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    wasm(),
    typescript(),
    nodeResolve({browser: true}),
    commonjs(),
  ]
};
