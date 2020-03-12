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
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      json(),
      typescript2({
        typescript: require('typescript'),
        tsconfig: 'tsconfig.build.json',
        useTsconfigDeclarationDir: true,
      }),
      commonjs(),
      resolve(),
      terser(),
      del({ targets: 'dist/*' }),
      analyze(),
      sourcemaps(),
    ],
  },
];
