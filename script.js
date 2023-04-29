function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;

	while(num-- > 0) {
		let c = a+b;
		b = a;
		a = c;
	}

	return b;
}

module.exports = fibonacci;
