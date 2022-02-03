var cars = [
    { model: "Golf", price: "Medium" },
    { model: "A6", price: "Expensive" }
];

var prices = cars.map(function(car) {
    return car.price;
});

console.log('prices: ', prices);