/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca

  let stringMasLargo = strings[0]; // Asignamos el primer string del arreglo como el más largo inicialmente

  // Iteramos sobre el arreglo desde el segundo elemento
  for (let i = 1; i < strings.length; i++) {
    // Comparamos la longitud del string actual con el más largo actual
    if (strings[i].length > stringMasLargo.length) {
      stringMasLargo = strings[i]; // Si encontramos un string más largo, lo asignamos como el nuevo más largo
    }
  }

  return stringMasLargo;
}


// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga