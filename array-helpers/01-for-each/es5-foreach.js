var colors = ['red', 'blue', 'green'];

// ES5
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ES6
colors.forEach(function(color) {
    console.log(color);
})

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
// option1
// numbers.forEach(function(number) {
//     sum += number;
// })

// option2
function adder(number) {
    sum += number;
}

numbers.forEach(adder);


// print the sum variable
console.log(sum);