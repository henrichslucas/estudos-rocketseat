/*
//FUNCTIONS

    // declaração da função / function statement
    function createPhrases(){
        console.log('Estudar é muito bom');
        console.log('Paciencia e persistencia');
        console.log('Revisao é mae do aprendizado');
    }

    createPhrases();

//ARGUMENTOS E PARAMETROS e RETORNANDO VALORES DENTRO DA FUNÇAO

    //function expression/anonymous

                        //   parametros  
    const sum = function (number1, number2) {
       
        return(number1 + number2);        
    }
    // argumentos
    sum(2,3); 


    let number1 = 7, number2 = 7;
    

    console.log(`a soma é ${sum(number1, number2)}`)


    

//OUTRA MANEIRA DE ENTENDER FUNÇÕES


    //funçao é um liquidificador

    function fazerSuco(fruta1, fruta2) {
        return fruta1 + fruta2;
    }

    const copo = fazerSuco ('banana', 'maçã');

    console.log(copo);


//FUNCTION SCOPE

    let subject = 'create video';

    function createThoughts(subject) { //se o argumento for 'subject', o subject vira 'study' e dps volta a ser 'create video'
        subject = 'study';
        return subject;
    }


    function createThoughts(subject) { //se nao tiver argumento, subject sera study dentro e fora do escopo
        subject = 'study';
        return subject;
    }


//FUNCTION HOISTING(IMPORTANTE SABER ISSO)

    sayMyName();

    function sayMyName() { // a funçao criada dessa forma apos ser chamada FUNCIONA, pois o javascript sobe a funçao
        console.log('lucas');        
    }


    sayMyName();

    const sayMyName = function () { // nesse caso nao funciona pois o javascript subiria apenas 'const sayMyName()', e isso nao é uma funçao, logo, da erro
        console.log('lucas');        
    }

//ARROW FUNCTION(IMPORTANTE EIN)

const sayMyName = (name) => { // a setinha ' => ' substitui a palavra 'function', so isso kk
    console.log(name);
}

sayMyName('lucas');


//CALLBACK FUNCTION

    function sayMyName(){
        console.log('antes de executar o callback')

        function name() {
            console.log('estou em uma callback');
        }
        name();
        console.log('depois de executar a callback');
    }


    // callback é apenas um metodo diferente e melhor de escrever o mesmo q foi escrito acima

    function sayMyName(name){
        console.log('antes de executar o callback')
        name();
        console.log('depois de executar a callback');
    }
    sayMyName(
        () => {
            console.log('estou em uma callback');
        }
    )


*/

//FUNÇOES CONSTRUTORAS

    /*function() constructor        
        expressao 'new'
        criar um novo objeto
        'this' keyword
    */

    function Person(name) { // basicamente um struct, pesquisar melhor dps
        this.name = name;
    }

    const lucas = new Person('lucas');
    const jarvis = new Person('jarvis');
    console.log(lucas.name);
    console.log(jarvis.name);
