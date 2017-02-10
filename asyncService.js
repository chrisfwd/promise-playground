

module.exports = {

	getData : () => {

		/*
		 * Keys to understand:
		 * promises are always RETURNED back to the caller
		 * promises accept one parameter, which is a function
		 * promises pass 2 parameters into that function: resolve, reject (in that order)
		 */

		return new Promise( (resolve, reject) => {

			let resolveTimeout,
			    rejectTimeout,
			    // change these times to see how resolve and reject are handled
			    resolveTime = 2000,
			    rejectTime = 4000;


		    console.log('John: I promise I\'ll do the dishes today, honey.');
		    console.log('John: But the surf report looks amazing! hmmm...');



			/* 
			 * Simulate an ajax call that takes time to retrieve data
			 */

			resolveTimeout = setTimeout( () => {

				console.log('John: Okay, I\'ll do the dishes anyway.');

				
				//throw 'John: We ran out of detergent.';

				// call the resolve parameter when the data is available
				resolve('John: The dishwasher\'s running babe. I\'m going to the beach');

			}, resolveTime);



			/* 
			 * Simulate an ajax call that fails
			 * This never executes the reject handler if resolve already satisfied the promise
			 */

			rejectTimeout = setTimeout( () => {

				//throw "John was attacked by an elephant on his way to the kitchen.";

				reject('John: I decided to go surfing all day instead.');

			}, rejectTime);			



			/* 
			 * An error thrown anywhere in the process will be sent to .catch()
			 * This will satisfy the promise and prevent the resolve handler from executing
			 */

			//throw "John: The dishwasher broke";

		});

	}

};