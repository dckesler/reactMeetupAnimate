var webpack = require('webpack');
var os = require('os');

module.exports = {

    entry: [
        './react/App.jsx'
    ],

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.styl']
    },

    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/] },
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    devtool: 'eval'
};