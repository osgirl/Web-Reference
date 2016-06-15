'use strict';

/**
 * Module dependencies
 */

var colors = require( 'colors' );
var git = require( 'git-rev-sync' );

console.log( '\n' );
console.log( 'Web reference new grid system'.bold.underline.green );
console.log( '' );

console.log( 'loading dependencies...'.grey );

// Load required modules
var webpack           = require( 'webpack' ),
    path              = require( 'path' ),
    HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
    ngAnnotatePlugin  = require( 'ng-annotate-webpack-plugin' ),
    argv              = require( 'minimist' )( process.argv.slice( 2 ) ),
    DEBUG             = true,
    RELEASE           = 'dev',
    autoprefixer      = require( 'autoprefixer' ),
    ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
    Clean             = require( 'clean-webpack-plugin' );

console.log( 'dependencies loaded!'.grey );
console.log( '' );

if (argv.release !== undefined) {
	DEBUG = false;
	RELEASE = argv.release;
}

// Load enviroment variables
var envConfig = require( './config/build/' + RELEASE + '.json' );
var buildConfig = require( './buildJson.json' );

// Git version and commits hash
console.log( 'Git Details'.underline.yellow );
// console.log(colors.cyan('Branch: %s'), git.branch());
// console.log(colors.cyan('Commit: %s'), git.long());
// console.log(colors.cyan('Version: %s'), git.tag());
console.log( '' );

// Which mode are we building in??
console.log( 'Build Mode'.underline.yellow );
console.log( colors.cyan( 'Debug: %s' ), DEBUG );
console.log( colors.cyan( 'Release: %s' ), RELEASE );
console.log( '' );

// What are the environment variables
console.log( colors.yellow.underline( 'Environment Variables (%s)' ), RELEASE );
console.log( colors.cyan( 'VERSION: %s' ), envConfig.VERSION );
console.log( colors.cyan( 'COMMIT: %s' ), envConfig.COMMIT );
console.log( '' );

// Delcare some PATHS to make it all easier
var PATHS = {
	app        : path.join( __dirname, '/app' ),
	bower      : path.join( __dirname, 'public/bower_components/' ),
	nodeModules: path.join( __dirname, 'node_modules' ),
	scssFolder : path.join( __dirname, 'public/scss' ),
	services   : path.join( __dirname, 'public/services' )
};

module.exports = {
	cache        : true,
	entry        : {
		vendor: [
			PATHS.bower + 'ionic/js/ionic',
			PATHS.bower + 'angular/angular',
			PATHS.bower + 'angular-animate/angular-animate.js',
			PATHS.bower + 'angular-ui-router/release/angular-ui-router.js',
			PATHS.bower + 'google-code-prettify/src/prettify.js'
		],
		app   : ['./app/bootstrap.js']
	},
	output       : {
		path    : path.join( __dirname, 'www' ),
		filename: (DEBUG ? 'js/[name].bundle.js' : 'js/[name].[hash].bundle.js')
	},
	devtool      : !DEBUG ? false : false,
	debug        : DEBUG,
	module       : {
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
				'css!sass?outputStyle=' + (DEBUG ? 'expanded' : 'compressed') + '&' +
				'includePaths[]=' +
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
	},
	resolve      : {
		root             : [
			path.join( __dirname, 'app' ),
			path.join( __dirname, 'public/bower_components' ),
			path.join( __dirname, 'node_modules' )
		],
		extensions       : [
			'',
			'.js', '.coffee',
			'.html', '.jade',
			'.css', '.styl', '.scss', '.less'
		],
		moduleDirectories: [
			'public/bower_components',
			'node_modules'
		],
		alias            : {}
	},
	noParse      : [
		PATHS.nodeModules + '/',
		PATHS.nodeModules + '/angular',
		PATHS.nodeModules + '/angular-ui-router',
		PATHS.nodeModules + '/angular-animate',
		PATHS.nodeModules + '/angular-messages',
		PATHS.nodeModules + '/angular-cookies',
		PATHS.nodeModules + '/angular-sanitize'
	],
	resolveLoader: {
		root: PATHS.nodeModules
	},
	plugins      : [
		new HtmlWebpackPlugin( {
			pkg          : require( './package.json' ),
			inject       : false,
			template     : 'app/index.html',
			hash         : false,
			chunks       : ['app', 'vendor'],
			buildId      : buildConfig.buildNumber,
			buildDateTime: buildConfig.buildDateTime,
			release      : RELEASE
		} ),
		new ExtractTextPlugin( (DEBUG ? 'css/[name].bundle.css' : 'css/[name].[hash].bundle.css') ),
		new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ ),
		new webpack.DefinePlugin( {
			__ENV_CONFIG__: JSON.stringify( envConfig )
		} )
	].concat( DEBUG ? [] : [
		new ngAnnotatePlugin( {
			add: true
		} ),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),

		// Minimize all JavaScript output of chunks.
		// Loaders are switched into minimizing mode.
		// You can pass an object containing UglifyJS options.
		new webpack.optimize.UglifyJsPlugin( {
			mangle          : false,
			preserveComments: false,
			compress        : {
				sequences    : true, // join consecutive statemets with the “comma operator”
				properties   : true, // optimize property access: a["foo"] → a.foo
				dead_code    : false, // discard unreachable code
				drop_debugger: true, // discard “debugger” statements
				unsafe       : false, // some unsafe optimizations (see below)
				conditionals : true, // optimize if-s and conditional expressions
				comparisons  : true, // optimize comparisons
				evaluate     : false, // evaluate constant expressions
				booleans     : false, // optimize boolean expressions
				loops        : true, // optimize loops
				unused       : false, // drop unused variables/functions
				hoist_funs   : false, // hoist function declarations
				hoist_vars   : true, // hoist variable declarations
				if_return    : false, // optimize if-s followed by return/continue
				join_vars    : true, // join var declarations
				cascade      : false, // try to cascade `right` into `left` in sequences
				side_effects : false, // drop side-effect-free statements
				warnings     : true
			}
		} )
	] )
};
