import './style.css';
import { projectForm } from './projectFormModule.js';
import { formEventListener } from './formEventListenerModule.js';
import { projectFactory } from './projectFactoryModule.js';
import { projectWallet } from './projectWalletModule.js';
import { createProjectFactory } from './createFactory';

const wallet = projectWallet();
//console.log(proj);

let p = createProjectFactory();
let pam = p.createProject("project object")
let sam = p.createProject("sam")
//p.createProject("pam");

wallet.addProject(pam);
wallet.addProject(sam);
console.log(pam)
console.log(wallet);
//p.createProject("bill");


//app starts with new home screen rendering; 
//then you can add projects to the wallet and click on already added projects;
//then the project screen has you can add/remove items and maybe eventually a single item screen;






