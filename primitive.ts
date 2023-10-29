//Boolean:
let authorized: boolean;
authorized = false;
authorized = true;
authorized = (()=> true)();
authorized = (()=> false)();

let lastname : string;
lastname = "sahu";

let firstname : string;
firstname = "mahi";
firstname = (()=> "ved")(); //self calling function
//firstname = null;
//firstname = undefined;
//firstname = true;
firstname = `Hi Mahendra ${lastname}`
console.log(firstname);
