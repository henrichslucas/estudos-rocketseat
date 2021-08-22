/*separe um texto que contem espaços, em um novo array onde cada texto é uma posiçao do array.
Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = 'eu quero viver o amor';

let myArray = phrase.split(' ');

let phraseWithUnderscore = myArray.join('_')

console.log(phraseWithUnderscore);

