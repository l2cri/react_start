var webpack = require('webpack');
var path = require('path');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: {
        vendor: ['react','react-dom','redux','react-redux','babel-polyfill'],
        app: './client/app.js'
        // another page bouldle
        // app1: './client/app1.js'
        // app2: './client/app2.js'
    },
    output: {
        path: __dirname + '/public/build/',
        publicPath: "/build/",
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: PROD ? [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.PATH_ROUTER': JSON.stringify(process.env.PATH_ROUTER || '/path-to-route/')
            // anoter env.varibles on production
            // 'process.env.SOME_VAR': JSON.stringify(process.env.SOME_VAR || 'default'),
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.CommonsChunkPlugin("vendor","react.js"),

        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false,
                drop_console: true
            }
        })
    ] : [
            new webpack.DefinePlugin({
                'process.env.PATH_ROUTER' : JSON.stringify(process.env.PATH_ROUTER || '/path-to-route/')
                // anoter env.varibles on development
                // 'process.env.SOME_VAR': JSON.stringify(process.env.SOME_VAR || 'default'),
            })
        ]
};
