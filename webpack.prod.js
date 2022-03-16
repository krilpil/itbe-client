const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge').merge
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[contenthash].css',
            chunkFilename: '[contenthash].css'
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[contenthash].bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        publicPath: '/'
    },
    module: {
        rules: [
            // SASS/SCSS -> CSS -> MiniCSS -> Imported into HTML
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64:7]",
                            },
                        },
                    },
                    'sass-loader'
                ]
            },
            // Puts resources in a folder images
            {
                test: /\.(svg|png|jp?g|gif)/i,
                type: 'asset/resource'
            }
        ]
    }
})