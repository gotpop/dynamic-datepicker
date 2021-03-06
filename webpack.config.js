let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        filename: 'src.bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        port: 9000,
        watchContentBase: true
    },
    module: {
        rules: [
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader'
              ]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env']
                }
              }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                    noquotes: true
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/img/favicon.ico",
            title: 'GotPop',
            template: './src/index.html',
            inject: 'head'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}
