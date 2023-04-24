function fibonacci(num) {
// your code here
	let num1 = 0;
	let num2 = 1;
    let coumt = 0;

	while(count < num){
		console.log(num + " ");

		let num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
		count++;
	}
}

module.exports = fibonacci(10);
