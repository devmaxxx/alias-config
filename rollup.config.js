import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript2 from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import visualizer from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';

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
    ].filter(Boolean),
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      json(),
      typescript2({
        typescript: require('typescript'),
        tsconfig: isProduction ? 'tsconfig.build.json' : 'tsconfig.json',
        useTsconfigDeclarationDir: isProduction,
      }),
      builtins(),
      resolve(),
      commonjs(),
      sourcemaps(),
      isProduction && terser(),
      isProduction &&
        visualizer({
          filename: './dist/stats.html',
          template: 'circlepacking',
        }),
    ].filter(Boolean),
  },
];
