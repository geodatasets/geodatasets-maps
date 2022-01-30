const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './preview/script.js',
    output:{
        filename: '_bundle.js',
        path: path.resolve(__dirname,''),
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
    
    
    plugins:[
        new MiniCssExtractPlugin({
            filename:"_bundle.css"
        }),
        
        new  CopyPlugin({
            patterns: [
              {from:"src/styles/fonts",to:"fonts"},
            ]
        }),
        new HtmlWebpackPlugin({
            template: "preview/template.html",
            filename: '_preview.html'
        }),
    ]
    
    
}