module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'libpack.js',
        library: 'libpack',
        libraryTarget:'umd'
    },
	module: {
        rules: [
          {
            test: /.png$/,
            use: 'base64-image-loader'
          },
          {
            test: /.css$/,
            use: 'css-content-loader'
          }
        ]
    }
};
