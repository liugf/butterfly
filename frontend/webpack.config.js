var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path:     'build',
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test:   /\.(png|gif|jpe?g|svg)$/i,
				loader: 'url?limit=10000'
			},
			{
				test:   /\.js[x]?/,
				loaders: ['react-hot', 'babel?{"presets":["es2015","react"]}'],
				include: __dirname + '/src'
			},
			{
				test:   /\.less/,
				loader: ['style', 'css', 'less']
			},
			{
				test:   /\.html/,
				loader: 'html'
			}
		]
	}
};