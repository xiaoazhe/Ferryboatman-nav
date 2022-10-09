'use strict'
const path = require('path')
const defaultSettings = require('./settings.js')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || ''

const port = 9520

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: './', // 部署应用包时的基本 URL
  outputDir: 'dist', // build时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  assetsDir: 'op_static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  lintOnSave: false,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/op_api': {
        target: defaultSettings.target,
        changeOrigin: true,
        pathRewrite: {
          '^/op_api': '/op_api'
        }
      }
    }
  },
  css: {
    extract: process.env.NODE_ENV === 'production',
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')({
            // 配置使用 autoprefixer
            overrideBrowserslist: ['last 15 versions']
          })
        ]
      }
    }
  },
  configureWebpack(config) {
    // eslint-disable-next-line no-sequences
    (config.name = name),
    (config.resolve.alias = {
      '@': resolve('src')
    })
    if (
      process.env.NODE_ENV === 'production' &&
            defaultSettings.webpackBundleAnalyzer
    ) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  chainWebpack(config) {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }])
    config.plugins.delete('prefetch')

    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/styles/variables.scss']
        })
        .end()
    })
    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          inline: /runtime\..*\.js$/
        }])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          elementUI: {
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
