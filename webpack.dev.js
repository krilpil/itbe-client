const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge').merge

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: 80,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].bundle.js',
        assetModuleFilename: 'assets/[name][hash][ext][query]',
        publicPath: '/'
    },
    module: {
        rules: [
            // SCSS -> CSS -> Compiled to JS -> Imported into HTML
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]_[hash:base64:3]",
                            },
                        },
                    },
                    'sass-loader'
                ]
            }
        ]
    }
})