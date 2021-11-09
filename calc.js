//Addition, Subtraction, Multiplication, Division, Square root

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Instructions on what symbols to input and format
console.log("Addition use: + (i.e. \"+ 1 1\")")
console.log("Subtraction use: - (i.e. \"- 2 1\")") 
console.log("Multiplication use: * (i.e. \"* 2 2\")") 
console.log("Division use / (i.e. \"/ 2 2\")")
console.log("Square Root use: # (i.e. \"# 4\")")
console.log("Eponents use: ^ (i.e. \"^ 2 3\")")

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
	console.log("num1", num1)
	console.log("num2", num2)

	//Addition
	if (mathSymbol === "+"){
		console.log(num1 + num2);
	} 
	
	//Subtraction
	else if (mathSymbol === "-"){
		console.log(num1 - num2);
	}

	//Mutiplication
	else if (mathSymbol === "*"){
		console.log(num1 * num2);
	}

	//Division
	else if(mathSymbol === "/"){
		console.log(num1 / num2);
	}

	//Square Root
	else if(mathSymbol === "#"){
		let x = Math.sqrt(num1)
		console.log(x)
	}

	//Exponent
	else if(mathSymbol === "^"){
		let x = Math.pow(num1,num2);
		console.log(x)
	}
	// This line closes the connection to the command line interface.
	reader.close()

});
