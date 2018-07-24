const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'src','index.js'),
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,'index.html')
        })
    ],
    devServer: {
        contentBase:path.join(__dirname,'build'), //根目录
        open:true, //浏览器自动打开
        port:9000
    }
}