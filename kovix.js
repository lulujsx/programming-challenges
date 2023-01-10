// Consigna
// Escribí una función que reciba dos parámetros: un string S y un integer R.
// La función debe devolver un string donde los caracteres consecutivos de S no se
// repitan más que R veces.
// Tiene que devolver un string con el texto limpio y la cantidad de caracteres repetidos
// correcta.

const noRepeats = (s, r) => {
    let result = ''
    let repetitions = 1

    if (r === 0 || s.length === 0) {
        return result
    }
    result += s[0]
  
    for (let i = 1; i < s.length; i++) {
    
        if (s[i] === s[i-1]) {
        repetitions++
        } else {
            repetitions = 1
        }
        
        if (repetitions <= r) {
        result += s[i]
        }
    }
  
  return result
}

console.log(noRepeats("11112222", 3))
console.log(noRepeats("AAAAABBBBB6",1))