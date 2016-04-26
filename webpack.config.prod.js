'use strict';

/**
 * Module dependencies
 */

var colors = require( 'colors' );
var git = require( 'git-rev-sync' );

console.log( '\n' );
console.log( 'Ionic Starter App'.bold.underline.green );
console.log( '' );

console.log( 'loading dependencies...'.grey );

var path              = require( 'path' ),
    webpack           = require( 'webpack' ),
    HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
    ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
    DEBUG             = true,
    CleanDirPlugin    = require( 'clean-webpack-plugin' );

console.log( 'dependencies loaded!'.grey );
console.log( '' );

// Declare some PATHS to make it all easier later on
var PATHS = {
	app        : path.join( __dirname, '/app' ),
	bower      : path.join( __dirname, 'public/bower_components/' ),
	nodeModules: path.join( __dirname, 'node_modules' ),
	scssFolder : path.join( __dirname, 'public/scss' ),
	services   : path.join( __dirname, 'public/services' )
};

module.exports = {

	cache : true,
	devtool: 'source-map',
	entry : {
		vendor: [
			PATHS.bower + 'ionic/js/ionic',
			PATHS.bower + 'angular/angular',
			PATHS.bower + 'angular-animate/angular-animate.js',
			PATHS.bower + 'angular-ui-router/release/angular-ui-router.js'
		],
		app   : ['./app/bootstrap.js']
	},
	output: {
		path    : path.join( __dirname, 'www' ),
		filename: (DEBUG ? 'js/[name].bundle.js' : 'js/[name].[hash].bundle.js')
	},

	plugins: [

		// Minimize all JavaScript output of chunks.
		// Loaders are switched into minimizing mode.
		// You can pass an object containing UglifyJS options.
		new webpack.optimize.UglifyJsPlugin( {
			compressor: {
				warnings: false
			}
		} ),

		new webpack.optimize.OccurrenceOrderPlugin( true ),

		new HtmlWebpackPlugin( {
			pkg     : require( './package.json' ),
			chunks  : ['app', 'vendor'],
			template: './app/index.html'
		} ),

		new ExtractTextPlugin( (DEBUG ? 'css/[name].bundle.css' : 'css/[name].[hash].bundle.css') )

	],

	// modules - Options affecting your files
	// loaders - An array of loaders that we specify for our application
	// 	test - A regular expression to match the loader with a file
	// 	loaders - Which loaders to use for files that match the test
	module: {
		preLoaders: [{
			test   : /\.js$/,
			exclude: /node_modules|bower_components/,
			loader : 'eslint-loader'
		}],
		loaders   : [{
			test  : /\.html$/,
			loader: 'html'
		}, {
			test   : /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader : "babel",
			query  : {
				presets: ['es2015']
			}
		}, {
			test  : /\.json$/,
			loader: 'json'
		}, {
			test  : /\.png$/,
			loader: "url-loader?limit=100000"
		}, {
			test  : /\.jpg$/,
			loader: "file-loader"
		}, {
			test  : /\.scss$/,
			loader: ExtractTextPlugin.extract(
				'css!sass?outputStyle=compressed&includePaths[]=' +
				PATHS.scssFolder, {
					publicPath: '../../'
				}
			)
		}, {
			test  : /\.woff/,
			loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
		}, {
			test  : /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=fonts/[name].[hash].[ext]'
		}, {
			test  : /\.gif/,
			loader: 'url-loader?limit=15&mimetype=image/gif&name=images/[hash].[ext]'
		}, {
			test  : /\.jpg/,
			loader: 'url-loader?limit=15&mimetype=image/gif&name=images/[hash].[ext]'
		}, {
			test  : /\.png/,
			loader: 'url-loader?limit=15&mimetype=image/png&name=images/[hash].[ext]'
		}, {
			test  : /\.svg/,
			loader: 'file?prefix=font/'
		}, {
			test  : /[\/]angular\.js$/,
			loader: 'exports?angular'
		}, {
			test  : /[\/]ionic\.js$/,
			loader: 'exports?ionic'
		}]
	}
};