const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: "source-map",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'js/[name].[contenthash].js',
        assetModuleFilename: '[name].[ext]',
        clean: true
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                //using MiniCssExtractPlugin sicen our app is already in production
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpeg|svg|gif|ico|jpg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "SeeWorld",
            filename: 'index.html',
            template: './public/index.html'
        }),
        //instead of eslint loader
        new ESLintPlugin(),
        //plugin to separate css files so they can be cached in production
        new MiniCssExtractPlugin({
            filename: 'css/[name][contenthash].css'
        })
    ]
};
