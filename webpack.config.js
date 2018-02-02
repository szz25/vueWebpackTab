const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, "vueJs", "main.js"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            path: __dirname + '/dist'
        }),
        new webpack.HotModuleReplacementPlugin() // 热替换
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "vue-style-loader"]
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: ['file-loader']
        }, {
            test: /\.html$/,
            loader: ['html-loader']
        }, {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            loader: ['url-loader']
        }, {
            test: /\.vue$/,
            loader: ['vue-loader']
        }]
    },
    resolve: {
        alias: {
            ".vue$": "vue/dist/vue.ems.js"
        }
    },
    devServer: {
        host: "localhost",
        port: 8080
    }
}