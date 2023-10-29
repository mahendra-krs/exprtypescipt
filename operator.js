var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits = ['apple', 'banana', 'orange'];
var foods = ['tomato', 'potato'];
var comb = __spreadArray(__spreadArray([], fruits, true), foods, true);
var user = {
    firstname: 'mahi',
    lastname: 'sahu',
    userid: 'mahi123'
};
var userDetail = __assign(__assign({}, user), { address: "309 siddhi nisarg", email: "mks@gmail.com" });
var add = function (x, y, z) {
    return x + y + z;
};
var arr = [8, 9, 9];
//console.log(`Added value:  ${add(arr[0], arr[1], arr[2])}`);
// console.log(`Added value:  ${add(...arr)}`);
// console.log(`User value is: ${userDetail}`);
// console.log(`User2 value is:`,userDetail);
var justapple = comb[0], second = comb[1], restcomb = comb.slice(2);
// console.log(justapple)
// console.log(second)
// console.log(restcomb);
// ;
function getEditible(apple) {
    var restcomb = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restcomb[_i - 1] = arguments[_i];
    }
    console.log('this is ' + apple);
    console.log("second : ".concat(restcomb));
}
getEditible(restcomb);
