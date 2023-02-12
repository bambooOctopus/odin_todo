import { todo } from './todoModule.js'

const content = document.getElementById("content");
const helloWorld = document.createElement("h1");
helloWorld.textContent = "hello world from the refresh branch";
content.appendChild(helloWorld);

const main = todo().projects();