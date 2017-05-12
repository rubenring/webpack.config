import merge from 'webpack-merge';
import webpack from 'webpack';
import path from 'path';

const prodConfig = merge({
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            },
        })
    ]
});

module.exports = prodConfig;