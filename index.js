
var asyncService = require('./asyncService');


// custom success handler
let customResolveHandler = (message) => { 
	// now we can perform any actions that rely on data to be present
	console.log(message);
	console.log('Sue: thank you so much for doing the dishes');

	// example of throwing an error within resolve handler
	// call to promise must include .catch() in order for this to work
	throw "Sue: Oh no! There's soap everywhere!";
}

// custom reject handler
let customRejectHandler = (error) => { 
	console.log(error);
	console.log('Sue: Aww Shucks!');
}


console.log('------------------------------------------');
console.log('Sue: Honey, can you please do the dishes today?');

// async service.getData returns a promise,
// which we can perform then() or catch() on
asyncService.getData().then(customResolveHandler).catch(customRejectHandler);

/*
 * DO:
 * - Use the format .then(resolve).catch(reject) instead of .then(resolve, reject)
 *   This allows you to catch any errors, even in the resolve method
 */