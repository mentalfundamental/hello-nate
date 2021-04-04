// function bouncer(arr) {
//     arr.forEach(item => )    
// }
// console.log(bouncer([7, "ate", "", false, 9]));

let arr = ['a', 0, false, null, NaN, 'b', 2, '', undefined, 'c'];
arr.forEach(check);

function check(item, index) {
    console.log(`${item}: ${Boolean(item)}`);
}

console.log(arr);

// let a = arr[1];
// console.log(typeof a);
// console.log(Boolean(a));