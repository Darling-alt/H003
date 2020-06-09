const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry:"./src/index.js",
    output:{
        fileName:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        open:true,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]


}