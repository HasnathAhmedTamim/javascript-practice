// VARIABLE DISCUSSION
const accountId = 111;
let accountState;
let accountEmail = "hasnath.tamim333@gmail.com";
var accountPassword = "1235";

accountCity = "Dhaka";

// accountId = 2; not allowed

accountEmail = "tamim@gmail.com";
accountPassword = "000";

// can declare like this but this not good
accountCity = "Khilgoan";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
exploring javascript

prefer not to use var because of issue in block scope and 
functional scope
*/
