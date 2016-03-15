var webpack = require('webpack');

module.exports = {
	entry:  './src',
	output: {
		path:     'build',
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		loaders: [
			{
				test:   /\.(png|gif|jpe?g|svg)$/i,
				loader: 'url?limit=10000'
			},
			{
				test:   /\.js/,
				loader: 'babel',
				include: __dirname + '/src',
				query: {
					presets: ['es2015', 'react']
				}
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