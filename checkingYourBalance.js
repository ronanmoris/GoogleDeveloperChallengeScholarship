/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code

var balance = 1.00;
var checkBalance = false;
var isActive = true;


if(!checkBalance){
    isActive = false;
    console.log("Thank you. Have a nice day!");
}
if(isActive && balance > 0){
    console.log("Your balance is $" + balance.toFixed(2) + ".");
    
} else if(checkBalance && !isActive){
    console.log("Your account is no longer active.");
    
} else if(isActive && balance === 0.00){
    console.log("Your account is empty.");
    
} else if(isActive && balance < 0){
    console.log("Your balance is negative. Please contact bank.");
}
