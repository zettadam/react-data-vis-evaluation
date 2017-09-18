const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const NameAllModulesPlugin = require('name-all-modules-plugin')

const API_PORT = 3000
const DIST_PATH = path.join(__dirname, '/dist')
const HOST = 'localhost'
const PORT = 8000
const PUBLIC_PATH = '/assets/'
const SOURCE_PATH = path.join(__dirname, '/src')
const VENDOR_PKG = Object.keys(pkg.dependencies)


module.exports = {
  cache: true,
  devServer: {
    contentBase: './dist/',
    historyApiFallback: true,
    host: HOST,
    hot: true,
    inline: true,
    noInfo: false,
    port: PORT,
    proxy: {
      '/data/*': `http://${HOST}:${API_PORT}`
    },
    publicPath: PUBLIC_PATH,
    stats: 'minimal'
  },
  entry: {
    app: [ `${SOURCE_PATH}/index` ],
    vendor: VENDOR_PKG
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: `${DIST_PATH}/assets`,
    publicPath: PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CONTEXT_PATH: JSON.stringify('/')
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) return chunk.name
      return chunk.mapModules(m => path.relative(m.context, m.request)).join('_')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 3
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      filename: 'runtime.js'
    }),
    new NameAllModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.[hash].css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: '../index.html',
      inject: true,
      template: `${SOURCE_PATH}/index.html`,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      SOURCE_PATH,
      'node_modules',
      'fixtures'
    ]
  }
}
