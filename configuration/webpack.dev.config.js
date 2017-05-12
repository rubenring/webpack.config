import merge from 'webpack-merge';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
const devConfig = merge({
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true',
    ],
    target: 'web',
    output: {
        path: '/',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            },
        }),
    ]
});

module.exports = devConfig;