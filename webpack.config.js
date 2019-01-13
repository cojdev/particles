const path = require('path');

module.exports = function(env, argv) {
    return {
        entry: './src/js/index.js',

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'docs/js'),
            publicPath: 'docs/js',
        },

        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
            ]
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        }
    }
};