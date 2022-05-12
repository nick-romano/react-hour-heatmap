// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: './dist',
    format: 'es',
    exports: 'named'
  },
  plugins: [typescript()],
  external: ["react", "react-dom"],
};