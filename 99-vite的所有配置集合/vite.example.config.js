import {defineConfig} from "vite";


export default defineConfig({

    optimization: {
        //语雀：02- vite初体验和依赖预构建 ，exclude: ["lodash"],
        //当遇到lodash依赖的时候，不进行依赖预构建, 就会导致引入lodash后，又请求一大堆js资源都是lodash引用的依赖；
        exclude: ["lodash"],
    },

    //匹配.env环境变量前缀的配置 在 03-vite的学习-环境变量中有详细的说明
    envPrefix: "ENV_",

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
        assetsDir: "static" //run build后 输出目录的静态资源的目录名字
    },

    //css属性：对css的行为进行配置
    css: {
        //modules属性：对css的模块化行为进行配置；
        modules: {
            localsConvention: "camelCase", //跟模块化后新生成的类名有关系
            scopeBehaviour: "local", //是否开启模块化
            generateScopedName: "[name]_[local]_[hash:5]", //对模块化后生成的类名的格式定义，如何配置搜索postcss modules；
            globalModulePaths: ["绝对路径"]  //配置的绝对路径不会参与css的模块化
        },


        //preprocessorOptions css预编译器的配置
        preprocessorOptions: {
            less: {
                // 针对less的配置,这些配置只是举例，具体的配置可以去less的文档查看lessc编译器的再编译文件可以配置的参数；
                math : "always",
                globalVars:{ //配置全局变量
                    mainColor:"red",

                }
            },
            sass: {},
        },

        //默认是false。 true：就是给我们的css代码添加这个索引文件，能让我们在浏览器或者报错方便的调试找到源代码文件
        devSourcemap: true,

        //关于postcss的配置
        postcss:{
            plugins: [],
        }
    }
})
