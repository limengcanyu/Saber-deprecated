module.exports = {
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: config => {
        //忽略的打包文件
        config.externals({
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios',
            'element-ui': 'ELEMENT',
        });

        const entry = config.entry('app');
        entry.add('babel-polyfill').end();
        entry.add('classlist-polyfill').end();
        entry.add('@/mock').end();
    },

    devServer: {
        // 端口配置
        port: 1888,
        // 反向代理配置
        proxy: {
            '/api': {
                // target host
                target: 'http://localhost:1900',
                // proxy websockets
                ws: true,
                // rewrite path: object/function, rewrite target's url path. Object-keys will be used as RegExp to match paths.
                pathRewrite: {
                    '^/api': '/', // 以 /api 开头的 重写为 /
                },
            },
        },
    },
};
