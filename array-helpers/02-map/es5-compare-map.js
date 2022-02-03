var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

// Using Map Helpers
var es6DoubledNumbers = numbers.map(function(number) {
    return number * 2;
})

console.log('ES5 doubledNumbers: ', doubledNumbers);
console.log('ES6 doubledNumbers: ', es6DoubledNumbers);