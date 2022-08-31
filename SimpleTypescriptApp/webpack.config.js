const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node-modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
}