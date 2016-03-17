var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./resources/index'
	],
	output: {
		path:     'public/build',
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test:   /\.(png|gif|jpe?g|svg)$/i,
				loader: 'url?limit=10000'
			},
			{
				test:   /\.js[x]?/,
				loaders: ['react-hot', 'babel?{"presets":["es2015","react"]}'],
				include: __dirname + '/resources'
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
