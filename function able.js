"use strict"

let method = (name = "Samat") => console.log(name);

//method("zharkyn");

let method2 = (...name) => console.log(name);

//method2(3, 4, 5);

let method3 = (name1, ...name) => {
	console.log(name1); 
	console.log(name);
}

//method3('hello world', 4, 5, 6, 7);

let method4 = (name) => console.log(Math.max(...name));

//method4([1, 2, 3, 4]);


