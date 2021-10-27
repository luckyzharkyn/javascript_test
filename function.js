"use strict"

function test(name){
	return "Hello " + name;
}

const test_v = function(name1){
	return "hello " + name1
}

const test_a = (name) => {
	return "Zharkyn" + name;
}

const test_b = (name) => "Zharkyn1 " + name;

const test_s = (name = "Danil") => {
	return "hello " + name;
}

const test_e = (...numbers) => {
	console.log(numbers);
}

test_e(1, 3, 5);

const [num1, ...num2] = [1, 3, 5, 6];

console.log(num1, num2);

