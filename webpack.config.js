const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: [
    './wp_src/js/sr_app.js'
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCss.loader,
            options: {hmr: false},
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: true,
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: 'vue-style-loader!css-loader!sass-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            },
            esModule: true
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'src', 'pages', 'strategyEx', 'assets'),
    filename: "sr_app.js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCss({
      filename: "sr_app.css"
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'wp_src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json', '.scss', '.css', '.node']
  }
};
