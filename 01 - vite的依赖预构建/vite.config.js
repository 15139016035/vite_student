export default {
    optimization: {
        //语雀：02- vite初体验和依赖预构建 ，exclude: ["lodash"],
        //当遇到lodash依赖的时候，不进行依赖预构建, 就会导致引入lodash后，又请求一大堆js资源都是lodash引用的依赖；
        exclude: ["lodash"],
    }
}





