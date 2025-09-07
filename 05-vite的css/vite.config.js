import {defineConfig} from "vite";


export default defineConfig({
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