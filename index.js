const ler = require('readline-sync');

function inicia() {
    const conteudo = {}

    conteudo.buscarTermo = perguntareRetornarTermodePesquisa();  
    conteudo.prefixo = perguntareRetornarPrefixo()

    function perguntareRetornarTermodePesquisa() {  
        return ler.question('Termo para ser Pesquisado: ');
    };

    function perguntareRetornarPrefixo() {
        const prefixos = ['quem pode ser', 'o que pode ser', 'A Historia de']
        const selecionarIndicDePrefixo = ler.keyInSelect(prefixos, 'Escolha uma Possibilidade: ')
        const selecionarIndicDeTexto = prefixos[selecionarIndicDePrefixo]

        return selecionarIndicDeTexto
    };

    console.log(conteudo);

};
inicia();