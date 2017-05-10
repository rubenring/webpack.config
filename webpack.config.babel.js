import webpack from 'webpack';
import merge from 'webpack-merge';
import prodConfig from './configuration/webpack.prod.config';
import devConfig from './configuration/webpack.dev.config';
import nodeExternals from 'webpack-node-externals';

const config = merge({
    entry: [
        __dirname + '/server.js'
    ],
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname + '/server/',
        filename: "bundle.js",
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['es2015']
                },
            }],
        }, ]
    },
})

if (process.env.NODE_ENV == "production") {
    module.exports = merge(config, prodConfig);
} else {
    module.exports = merge(config, devConfig);
}