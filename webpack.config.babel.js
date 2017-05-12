import webpack from 'webpack';
import merge from 'webpack-merge';
import prodConfig from './configuration/webpack.prod.config';
import devConfig from './configuration/webpack.dev.config';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

const config = merge({
    devtool: 'inline-source-map',
    entry: [
        './src/client/index.js',
    ],
    //target: 'node',
    target: 'web',
   // externals: [nodeExternals()],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            query: {
                presets: [ 'react-hmre', 'es2015', 'react' ]
            }
        }
        ]
    },
})

if (process.env.NODE_ENV === "production") {
    module.exports = merge(config, prodConfig);
} else {
    module.exports = merge(config, devConfig);
}