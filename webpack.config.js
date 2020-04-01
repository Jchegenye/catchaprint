/**
 * @Resourse https://taylor.callsen.me/using-webpack-4-and-sass-with-wordpress/
 * @Author Jackson A. Chegenye
 * @AuthorURL https://github.com/Jchegenye
 * */

const { VueLoaderPlugin } = require(`vue-loader`);
//const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const path = require('path');

// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {

    //Enable npm watch
    watchOptions: {
        poll: true
    },

    //entry: path.join(__dirname, `src`, `main.js`),
    entry: ['./src/main.js', './src/assets/scss/style.scss'],
    output: { // for the JavaScript build
        filename: './build/js/baraka.min.js',
        // //filename: './build/js/baraka.min.[hash].js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: `vue-loader`,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'build/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'build/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'build/fonts/[name].[hash:7].[ext]'
                }
            },
            // A special rule for favicon.ico to place it into build root directory.
            {
                test: /favicon\.ico$/,
                loader: 'file-loader',
                options: {
                    name: 'build/icon/[name].[ext]?[hash:8]',
                },
            }
        ]
    },
    plugins: [ // for the SASS/CSS build
        // extract css into dedicated file
        new MiniCssExtractPlugin({
            filename: './build/css/baraka.min.css'
            //filename: './build/css/baraka.min.[hash].css'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // Relative path to your root dir (adjust accordingly)
            '@': path.resolve(__dirname, './src'),

            vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },
    optimization: {
        minimizer: [
            // enable the js minification plugin
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            // enable the css minification plugin
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};