const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin()
    ],
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader','less-loader']
            },
        ],
    },
};