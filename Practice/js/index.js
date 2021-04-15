function myAwesomeFunction(str) {
  str = 'nate';
  return function(name) {
    name = str;
    return name;
  }
};

let r = myAwesomeFunction('hey');
let r2 = r('hello');
console.log(r2);
