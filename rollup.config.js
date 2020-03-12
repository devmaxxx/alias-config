import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript2 from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import analyze from 'rollup-plugin-analyzer';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  {
    watch: {
      clearScreen: false,
    },
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: [],
    plugins: [
      json(),
      typescript2({
        tsconfig: 'tsconfig.build.json',
        // useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      resolve(),
      terser({}),
      del({ targets: 'dist/*' }),
      analyze(),
      sourcemaps(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  // {
  //   input: 'src/index.ts',
  //   external: ['ms'],
  //   plugins: [
  //     typescript(), // so Rollup can convert TypeScript to JavaScript
  //   ],
  //   output: [
  //     { file: pkg.main, format: 'cjs' },
  //     { file: pkg.module, format: 'es' },
  //   ],
  // },
];
