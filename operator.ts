let fruits = ['apple', 'banana', 'orange'];
let foods = ['tomato', 'potato'];
let comb = [...fruits, ...foods];

let user = {
    firstname: 'mahi',
    lastname: 'sahu',
    userid: 'mahi123'
}

let userDetail = {
    ...user,
    address : "309 siddhi nisarg",
    email: "mks@gmail.com"
}

const add = (x?: number, y?: number, z?:number ) : number => {
   return  x+y+z;
}

const arr: Array<number> = [8,9,9];

//console.log(`Added value:  ${add(arr[0], arr[1], arr[2])}`);
// console.log(`Added value:  ${add(...arr)}`);

// console.log(`User value is: ${userDetail}`);

// console.log(`User2 value is:`,userDetail);

let [justapple, second, ...restcomb] = comb;
// console.log(justapple)
// console.log(second)

// console.log(restcomb);
// ;

function getEditible(apple?, ...restcomb){
    console.log('this is ' + apple);
    console.log(`second : ${restcomb}`);
}
getEditible(restcomb);
