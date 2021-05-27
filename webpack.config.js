///////////////////////////
///// Imports /////
///////////////////////////
const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

///////////////////////////
///// Build Path /////
///////////////////////////
const buildPath = path.resolve(__dirname, 'build');

///////////////////////////
///// Export /////
///////////////////////////
module.exports = [
	{
		entry: {
			main: './src/main.ts',
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: ['ts-loader'],
					exclude: /node_modules/,
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin({ 'global.GENTLY': false }),
			new RemovePlugin({
				before: {
					include: [buildPath],
				},
				watch: {
					include: [buildPath],
				},
			}),
		],
		optimization: {
			minimize: true,
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: '[name].js',
			path: buildPath,
		},
		target: 'node',
	},
];
