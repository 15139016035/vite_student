import {defineConfig} from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";
import {process} from "yarn/lib/cli";


//策略模式
const envResolver={
    "build" :()=> {
        console.log("生产环境...")
        return Object.assign({},viteBaseConfig,viteProdConfig)
    },
    "serve" :()=> {
        console.log("开发环境...")
        return {...viteDevConfig,...viteDevConfig}
    },
}


//command 的值 是build 还是 serve 主要看我们的我们的启动命令
export default defineConfig(({command})=>{
    return envResolver[command]();

});



/*

简单写法:
export default defineConfig(({command})=>{
    return envResolver[command]();
    if (command === 'build'){
        //代表生产环境的配置
        return  Object.assign({},viteBaseConfig,viteProdConfig)
    }else if(command === 'serve'){
        //代表开发环境的配置
        return {...viteDevConfig,...viteDevConfig}
    }
});
*/
