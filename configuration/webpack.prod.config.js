import merge from'webpack-merge';
import webpack from'webpack';

const prodConfig = merge({
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        })
    ]
});

module.exports = prodConfig;