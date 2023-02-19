import { todo } from './todoModule.js'
import './style.css'
import { saveWallet } from './saveWalletModule.js';

const main = todo();
main.home();


saveWallet("bill");

