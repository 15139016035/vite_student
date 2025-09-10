/**
 * 通过nodeJs 来模拟一个vite
 *
 * */


//1.引入fs I/O操作；
const fs = require('fs/promises');
const express = require('express');
const path = require('path');

//获取app实例
const app = express();


app.listen(3000, () => {
    console.log("我启动了")
});


app.use(async  (req, res) => {


    /**
     * 案例一：
     */
    if (req.url === '/') {
        //访问首页
      const htmlContent = await fs.readFile(path.resolve(__dirname,'./index.html'));
      //返回给用户
        res.set("Content-Type","text/html");
        res.send(htmlContent);

    }

    if (req.url === '/main.js') {
        //访问首页
        const jsContent = await fs.readFile(path.resolve(__dirname,'./main.js'));
        //返回给用户
        res.set("Content-Type","text/javascript");
        res.send(jsContent);
    }

    if (req.url === '/app.vue') {
        //访问首页
        const vueContent = await fs.readFile(path.resolve(__dirname,'./app.vue'));
        //返回给用户
        res.set("Content-Type","text/javascript");
        res.send(vueContent);
    }



})