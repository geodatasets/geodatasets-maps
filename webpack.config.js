const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/build.js',
    output:{
        filename: 'GeodatasetsMap.js',
        path: path.resolve(__dirname,'dist'),
        libraryTarget: 'umd',
        library: {
            name: "geods",
            type: 'var',
            //export: 'default'
        }
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js','.scss','.css']
    },
    module:{
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options:{
                        url:false
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: false
                    }
                  }
        
                ]
              }
        
        ]
    },
    
    externals:[
        /^ol\/.+$/
    ],
    
    plugins:[
        new MiniCssExtractPlugin({
            filename:"GeodatasetsMap.css"
        }),
        
        new  CopyPlugin({
            patterns: [
              {from:"src/styles/fonts",to:"fonts"},
            ]
        }),
        
    ]
    
    
}