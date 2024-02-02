## Problem Solving

### Suma de 2

Dado un array de números A (pueden ser enteros o reales) y un target T (tambien entero o real), queremos saber si al menos un par de números, al sumarlos, se cumple que A[i] + A[j] = T
Crear una función que dado el array A y un target T, devuelve un booleano True si encuentra un par válido o False de lo contrario.
Ejemplos:

```javascript
let array = [1, 2, 3, 4]
let target = 5
solution(array, target) -> true // Los pares son: [1, 4] o [2, 3]
```

```javascript
let array = [4, 2, 6, 1, 26]
let target = 26
solution(array, target) -> false. // Ninguna combinación devuelve 26
```

```javascript
let array = [4, 2, 6, 0, 26]
let target = 26
solution(array, target) -> true. // Los pares son: [0, 26]
```

Solución:

```javascript
function solution(array, target) {
  let result = false;
  array.forEach((element1) => {
    array.forEach((element2) => {
      if (element1 + element2 === target) result = true;
    });
  });
  return result;
}
```