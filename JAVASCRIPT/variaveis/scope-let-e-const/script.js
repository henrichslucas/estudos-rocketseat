// const e let sao locais e so funcionam no escopo onde foi criada


console.log('> existe y antes do bloco?', y); // retorna erro pois ele apenas existe entre as chaves e nao no escopo global

{
    console.log('> existe y antes?', y); // retorna erro pois a variavel nao foi inicializada
    let y = 0; // aqui ele existe
    console.log('> existe y?', y); // retorna 0 pois esta tudo ok
} 

console.log('> existe x depois do bloco', y); // retorna erro pois ele apenas existe entre as chaves e nao no escopo global