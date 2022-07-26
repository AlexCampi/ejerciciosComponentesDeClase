class Cifras {
	constructor(num) {
		this.numero = num
	}

	esPar(){
		return this.numero%2 === 0
	}

	sumaDigitos(){
		let sum = 0
		let numero = this.numero.toString()
		for (let i = 0; i < numero.length; i++) {
			sum += parseInt(numero[i])
		}
		return sum
	}
}

let num1 = new Cifras(23)

console.log(num1.esPar(), num1.sumaDigitos())
