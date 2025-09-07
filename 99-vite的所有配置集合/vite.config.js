import {defineConfig, loadEnv} from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";


//策略模式
const envResolver = {


    "build": () => {
        console.log("生产环境...")
        return Object.assign({}, viteBaseConfig, viteProdConfig) // 写法 ，其实就是 prod的配置会覆盖且合并base的配置；因为有重合的肯定以prod的配置为主导嘛
    },
    "serve": () => {
        console.log("开发环境...")
        return {...viteDevConfig, ...viteDevConfig}
    },
}


//command 的值 是build 还是 serve 主要看我们的我们的启动命令
export default defineConfig(({command, mode}) => {
    return envResolver[command]();

});




