class Finanzas{
  dolaresToEuros(cifra){
    return cifra * 0.99
  }

  eurosToDolares(cifra){
    return cifra * 1.01
  }
}

let conversion = new Finanzas

console.log(conversion.dolaresToEuros(1), conversion.eurosToDolares(1))