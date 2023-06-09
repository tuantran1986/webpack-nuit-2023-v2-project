const path = require('path');
const webpack = require('webpack');

module.exports = {
    // "DAU VAO" = file INDEX.JS - thu muc SRC
    entry: {
        bundle: './src/index.js'
    },
    // "DAU RA" = file BUNDLE.JS - thu muc DIST
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // REGEX : check file.js + ngoai tru NODE_MODULES
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                // REGEX : check file.css
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            },
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/ 
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery"
        })
    ]
}