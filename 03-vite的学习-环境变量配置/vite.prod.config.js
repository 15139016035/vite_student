import {defineConfig} from "vite";

export default defineConfig({
    optimizeDeps:{
        exclude:[] //数组中的依赖不进行依赖处理
    },
    envPrefix: "ENV_"

})