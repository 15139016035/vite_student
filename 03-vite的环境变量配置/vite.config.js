import {defineConfig, loadEnv} from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";



//策略模式
const envResolver={


    "build" :()=> {
        console.log("生产环境...")
        return Object.assign({},viteBaseConfig,viteProdConfig) // 写法 ，其实就是 prod的配置会覆盖且合并base的配置；因为有重合的肯定以prod的配置为主导嘛
    },
    "serve" :()=> {
        console.log("开发环境...")
        return {...viteDevConfig,...viteDevConfig}
    },
}


//command 的值 是build 还是 serve 主要看我们的我们的启动命令
export default defineConfig(({command,mode})=>{




    console.log("打印command查看：",command)
    //配置中的会覆盖loadEnv()的配置
    const env = loadEnv(mode,process.cwd(),"VITE_");
        console.log("我想要打印:",env)




    return envResolver[command]();



});




/*
简单写法:
export default defineConfig(({command})=>{
    return envResolver[command]();
    if (command === 'build'){
        //代表生产环境的配置
    }else if(command === 'serve'){
        //代表开发环境的配置
    }
});
*/
