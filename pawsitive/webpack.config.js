const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
	context: CLIENT_DIR,
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', 'scss'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve('src'),
			styles: path.resolve('src/assets/scss')
		}
	},
	module: {
		rules: [
				{
				  test: /\.scss$/,
				  use: ExtractTextPlugin.extract({
				    fallback: 'style-loader',
				    use: ['css-loader', 'sass-loader']
				  })
				}
			]
	},
	plugins: [
    	new ExtractTextPlugin('style.css')
  	],
	watch: true
};