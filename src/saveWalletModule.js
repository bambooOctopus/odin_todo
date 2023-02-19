// at start 
// 1. check for localStorage
// 2. if localStorage {
//      a.) load all the projects && items from file
//      b.) instantiate each of them
//      c.) put the projects in the new wallet
//      d.) refresh screen with wallet
//      }
//    else {
//      a.) new game like always.
//     } 
//
//  3. save game upon new project || item.



const saveWallet = (wallet) => {
    

    
    
    
    if (localStorage) {
        console.log("localStorage");
        console.log(localStorage)
    }
    else {
        console.log("no stoarge");
    };
};

const deleteWallet = () => {
    
}

export { saveWallet }
