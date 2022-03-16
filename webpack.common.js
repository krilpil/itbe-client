const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            // Conversion to old js code
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                exclude: '/node_module/'
            },
            // Changes the path of resources in the html file
            {
                test: /\.html$/i,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}