import moduleA from './componentA.module.css';

console.log("moduleA",moduleA)



const div = document.createElement("div");
document.body.appendChild(div);

div.className=moduleA.footer;

