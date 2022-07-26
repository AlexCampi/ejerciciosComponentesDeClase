class Distancia{
  MillasAMetros(millas){
    return millas*1609.34
  }

  MillasAKilometros(millas){
    return millas*1.60934
  }
}

let millas = new Distancia

console.log(millas.MillasAMetros(1), millas.MillasAKilometros(1))

