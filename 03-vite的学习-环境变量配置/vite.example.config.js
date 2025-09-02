import {defineConfig} from "vite";


export default defineConfig({
    optimization: {
        //语雀：02- vite初体验和依赖预构建 ，exclude: ["lodash"],
        //当遇到lodash依赖的时候，不进行依赖预构建, 就会导致引入lodash后，又请求一大堆js资源都是lodash引用的依赖；
        exclude: ["lodash"],
    },

    //匹配.env环境变量前缀的配置 在 03-vite的学习-环境变量中有详细的说明
    envPrefix: "ENV_"
})
