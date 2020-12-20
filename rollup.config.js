import {nodeResolve} from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rust from '@wasm-tool/rollup-plugin-rust';

export default {
  input: 'src/index.ts',
  output: {
    file: 'main.js',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    typescript(),
    rust({ inlineWasm: true }),
    nodeResolve({browser: true}),
    commonjs(),
  ]
};
