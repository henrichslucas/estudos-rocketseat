
// DECLARATION ASSIGNMENT VAR

/* 
    variaveis e tipos de dados
    declaracao or declaration
*/

// assignment or atribuicao de valores

name = 'mike';

// que tipo de dado foi inserido?

console.log(typeof name) // retorna 'string', que é o tipo da variavel
console.log(name); // retorna 'mike', que é o conteudo da variavel

// AGRUPANDO DECLARACOES


let age, isHuman; // declarando duas variaveis numa linha so, 'agrupando declaracoes', igual C
age = 18;
isHuman = true;


console.log(age, isHuman);  // os valores dentro dos parenteses do log sao chamados de argumentos


// CONCATENANDO E INTERPOLANDO VARIAVEIS


// escrita de texto + variaveis

console.log('o' + name + 'tem' + age + 'anos.');

// interpolando valores com template strings, basicamente usando placeholder ${}

console.log(`o ${name} tem ${age} anos.`)



// OBJECT

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`); // para acessar as propriedades, basta usar o '.' 

// ARRAY

const animals = [
    'lion',
    'monkey',
    'cat',
    {
        name: 'dog',
        age: 2
    }
]

// acessar valores dentro do array

console.log(animals);

console.log(animals[3].name)
