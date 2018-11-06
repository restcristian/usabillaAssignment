var path = require('path');

module.exports = {
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader'
            },
            {
                test:/\.css$/,
                loader:'css-loader',
                query:{
                    modules:true,
                    localIdentName:'[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test:/\.css$/,
                loader:'postcss-loader'
            }
            
        ]
    },
    devServer:{
        contentBase:path.join(__dirname, 'dist'),
        compress:true,
        port:5000,
    }
    
};