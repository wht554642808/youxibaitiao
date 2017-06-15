const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const webpackConfig = {
	entry:  {
		// app: ["./src/pages/index/app.js"],
		app: ['webpack-hot-middleware/client', "./src/pages/index/app.js"],
        vendor: ['vue', 'vue-router', 'vue-resource']
	},
	output: {
		path: __dirname + "/build",
        publicPath: '',
		filename: "[name].js",
        chunkFilename: "[name].[chunkHash:6].js"
	},
    resolve: {
        extensions: ['*', '.js', '.vue'],
        alias: {
            'vue': __dirname + '/node_modules/vue/dist/vue.js',
            'vuex': __dirname + '/node_modules/vuex/dist/vuex.js',
            'vue-router': __dirname + '/node_modules/vue-router/dist/vue-router.js',
            'vue-resource': __dirname + '/node_modules/vue-resource/dist/vue-resource.js'
        }
    },
	module: {
		loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['url-loader?limit=100&name=./images/[name].[ext]']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
	 },
	 plugins: [
         new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            }),
		 new HtmlWebpackPlugin({
		   template: "./src/pages/index/index.html"
		 }),
         new webpack.HotModuleReplacementPlugin(),
         new webpack.NoErrorsPlugin()
	   ]
};

export default webpackConfig;


const express = require('express');
const app = express();

const compiler = webpack(webpackConfig);




app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    hot: true,
    stats: {
        colors: true,
        chunks: false
    },
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));


app.listen(8888, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:8888')
});
