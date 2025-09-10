import {defineConfig} from 'vite';
import path from 'path';



export default defineConfig({

    //配置路径别名
    resolve: {
        //路径别名
        alias: {
            "@": path.resolve(__dirname, "./"),
            "@assets": path.resolve(__dirname, "./src/assets"),
        }
    },
    //构建时的一些配置策略
    build: {
        //配置rollup的一些构建策略；
        rollupOptions: {
            output: { //控制输出
                //hash是文件名和文件内容进行组合计算的结果；
                assetFileNames: "[hash].[name].[ext]"
            },

        },
        assetsInlineLimit: 4096000, //静态资源小于这个大小就转为base64字符；大于这个值就是原样子
        outDir: "myDist", //run build 后输出目录的名字
        assetsDir: "static", //run build后 输出目录的静态资源的目录名字
        emptyOutDir: true //每次build 的时候先删除上次build的结果
    }
})