vite 的学习：
1. 学习了 依赖预构建 :  会把所有的依赖都重写为esmodule的模块化，并且放到/node_module/.vite/deps 目录下，并且会把第三方依赖所依赖的依赖都集成为一个文件；

2. 在vite.config.js 文件的一些细节：
    2.1 语法提示的细节注意：中 export default {配置...}； 或者  export default defineConfig({配置...});  第二种写法是ts的写法有类型限定，所以就会有语法提示
    2.2 环境的处理：就是我们不同的环境（生产，测试等等）会有不同的配置的；