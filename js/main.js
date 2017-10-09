var values = []; // empty array
var names = ['Jack', 'Jill', 'Hill'];

console.log(names[0] + " " +  names[2]);
console.log(names[1] + " " +  names[2]);

names.push("John");

console.log(names);

names.pop();

console.log(names);

names.shift();

console.log(names);

names.unshift('Joey');

console.log(names);

//names.push(); // pushes something on to the end of the array
//names.pop(); // removes the last value in the array
//names.unshift(); // inserts a value into the beginning of the array
//names.shift(); // removes the first value in the array

var index = names.indexOf('Jill');

names.push("Jack");

    if (names.indexOf('Jack') ===  -1) {
        console.log("Jack is not in the array");
    } else {
        var index = names.indexOf('Jack');
        console.log('Jack is at position ' + index);
    }

