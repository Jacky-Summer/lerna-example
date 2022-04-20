export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/index.umd.js',
      name: 'utils',
      format: 'umd',
    },
  ],
}
