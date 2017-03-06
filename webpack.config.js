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

};

module.exports = config;
