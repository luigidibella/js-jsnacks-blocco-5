const array1 = ['a', 'b', 'c'];
const array2 = [1, 2 ,3];
const arrayFuso = fondiArray(array1, array2);

function fondiArray(array1, array2) {
  let risultato = [];
  for (let i = 0; i < array1.length; i++) {
    risultato.push(array1[i]);
    risultato.push(array2[i]);
  }
  return risultato;
}

console.log(array1);
console.log(array2);

console.log(arrayFuso);