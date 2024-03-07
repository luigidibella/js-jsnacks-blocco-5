const stringaInput = "Ciao";
const stringaGirata = girareStringa(stringaInput);

function girareStringa(stringa) {
  return stringa.split('').reverse().join('');
}

console.log(stringaGirata);