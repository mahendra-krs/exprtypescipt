//Boolean:
var authorized;
authorized = false;
authorized = true;
authorized = (function () { return true; })();
authorized = (function () { return false; })();
var lastname;
lastname = "sahu";
var firstname;
firstname = "mahi";
firstname = (function () { return "ved"; })(); //self calling function
//firstname = null;
//firstname = undefined;
//firstname = true;
firstname = "Hi Mahendra ".concat(lastname);
console.log(firstname);
