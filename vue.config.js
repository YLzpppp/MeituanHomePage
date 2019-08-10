module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production' ? './':'/',

    publicPath: '',

    outputDir: 'dist',

    assetsDir: 'static',

    indexPath: 'index.html',

    filenameHashing: true,

    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '美团网-美食_酒店_旅游_团购_电影_吃喝玩乐',
            chunks:['chunk-vendors','chunk-common','index'],
            minify: true
        },
    },

    devServer: {
      host: "localhost",
      port: 8080,
      https: false,
      open: 'google chrome'
    },

    configureWebpack: {
        resolve:{
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            }
        }
    }
}