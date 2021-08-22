let techs = ['html', 'css', 'js'];

//adicionar um item no fim
    techs.push('nodejs');
//adicionar no começo
    techs.unshift('sql');
//remover do fim
    techs.pop();
//remover do começo
    techs.shift();
//pegar somente alguns elementos
    console.log(techs.slice(1,3));
//remover 1 ou mais itens em qualquer posiçao
    techs.splice(1,1); //remove, a partir da posicao 1, um elemento
//encontrar a posiçao de um elemento
    let index = techs('css');