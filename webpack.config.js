let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        widget: [
            path.join(__dirname, 'src', 'widget', 'widget-index.js')
        ],
        chat: [
            path.join(__dirname, 'src', 'chat', 'chat-index.js')
        ],
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].js',
        publicPath: '/js/'
    },
    module: {
        rules: [
            { test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      hot: true
    }
};
