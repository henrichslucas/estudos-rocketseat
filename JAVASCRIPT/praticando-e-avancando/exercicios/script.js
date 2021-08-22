/* 
    1) declare uma variavel de nome weight
    2) que tipo de dado é a variavel acima?
    3) declare uma variavel e atribua valores para cada um dos dados:
        name: string
        age: Number( integer )
        stars: Number( float )
        isSubscribed: boolean
    4) a variavel student abaixo é de que tipo de dados
    let student{};
    4.1) atribua a ela e as mesmas propriedades e valores
    5) declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
    6) reatribua valor para a variavel acima, colocando dentro dela o objeto student da questao 4. (NAO COPIAR E COLAR O OBJETO, MAS USAR O OBJETO CRIADO E INSERIR ELE NO ARRAY)

*/

    // 1) 
    let weight;

    // 2)
    console.log(typeof weight); // tipo undefined;

    // 3) 

    const person = {
        name: 'lucas',
        age: 19,
        stars: 2.5,
        isSubscribed: false
    }

    // 4) 
    let student = {};
    console.log(typeof student); // tipo object

    // 4.1) 
    student = {
        name: 'lucas',
        age: 19,
        stars: 2.5,
        isSubscribed: false
    }

    // 5)
    var students = [];

    // 6) 
    students = [student]


      
