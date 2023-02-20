import { todo } from './todoModule.js'
import './style.css' 

import { wallet } from './walletModule.js';
import { project } from './projectModule.js';
import { saveWallet, loadWallet } from './saveWalletModule.js';

const main = todo();
main.home();

const proj1 = project("proj 1");
const proj2 = project("proj 2");

const testWallet = wallet();
testWallet.addProject(proj1);
testWallet.addProject(proj2);

saveWallet(testWallet)
console.log(localStorage)
const savedTest = loadWallet("wallet");
console.log(savedTest);
console.log(testWallet);





