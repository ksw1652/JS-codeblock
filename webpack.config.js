const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const config = {
    entry: {
      app: ['./src/index']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }

  if(options.mode === 'development') {
    //development 설정
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        showErrors: true  //에러 발생시 메세지가 브라우저 화면에 노출 된다.
      })
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true,  //서버에서 HMR을 켠다.
      host: '0.0.0.0',  //디폴트로는 'localhost'로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
      contentBase: './dist',
      stats: {
        color: true
      }
    };
  } else {
    //prodection 설정
    config.plugins = [
      new CleanWebpackPlugin(['dist'])
    ];
  }

  return config;
}