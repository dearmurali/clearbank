var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname , 'build');
var APP_DIR = path.resolve(__dirname, 'main');

var config = {
    entry : APP_DIR + '/components/*.js',
    output: {
        path : BUILD_DIR ,
        filename : 'bundle.js'
    },
                
                resolve: {
                extensions: ['', '.js'],
                },
                
                /*module:{
                                loaders :[
                                                {
                                                                test : /.jsx?$/,
                                                                loader : 'babel-loader',
                                                                exclude: /node_modules/,
                                                                query : {
                                                                                presets : ['es2015', 'react']
                                                                }
                                                }
                                ]
                }*/
};

module.exports = config;
