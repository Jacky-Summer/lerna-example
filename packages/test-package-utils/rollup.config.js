export default {
  input: './src/index.js',
  output: [
    {
      format: 'cjs',
      file: './dist/index.cjs.js',
    },
    {
      format: 'es',
      file: './dist/index.es.js',
    },
  ],
}
