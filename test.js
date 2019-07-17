//playing around with javascript syntax
const fs = require("fs")

console.log('Hello World')
console.log('This is a test JS program to get familiar with the language')

let x = Math.random()

console.log('random number; ',x)

const checkDomainName = async(myFile) => {
	return /^[a-z0-9]+$/i.test(string)//checks if it is alphanumeric
}

console.log('Now I will print my own contents:')


function namePrinter (nameList, limit) {
	nameString = ''
	for (i = 0; i < (nameList.length);i++){
		if (i >= limit){
			nameString += 'and ' + (nameList.length - i) + ' more.'
			break
		}
		if (i != (nameList.length -1)){
			nameString += nameList[i] + ', '
		}
		else {
			nameString += 'and '+ nameList[i]
		}
	}
	console.log(nameString)
}

//check for edge cases in interviews!!

function namePrinterMax (nameList, charLimit) {
	nameString = ''
	for (i = 0; i < (nameList.length);i++){
		if (nameString.length >= charLimit){
			nameString += 'and ' + (nameList.length - i) + ' more.'
			break
		}
		if (i != (nameList.length -1)){
			nameString += nameList[i] + ', '
		}
		else {
			nameString += 'and '+ nameList[i]
		}
	}
	console.log(nameString)
}

console.log()
namePrinter(['Alice', 'Bob', 'Carlos', 'Diana', 'Erick'], 3)
namePrinterMax(['Alice', 'Bob', 'Carlos', 'Diana', 'Erick'], 10)
