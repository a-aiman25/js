// How to assign variables

const accountId = 144553
let accountEmail = "aiman@google.com"
var accountPassword = "12345"
accountCity = "Karachi"

// Const doesnot change
// accountId = 2
// console.log(accountId); 

/* let and var can change
We dont use var because of issue in block scope and functional scope
We will use const and let most
*/
accountEmail = "a25@gmail.com"
accountPassword = "212121"
accountCity = "Lahore"

console.table([accountId, accountEmail, accountPassword, accountCity])

// If we left variable without the value assign so its value is undefined
let accountState;
