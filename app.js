let listaDeNumerosSorteados = [];
let numerosDisponiveis = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto , 'Braziizian Portuguese Female', {rate : 1.2});
}

function mensagemInicial() {
    exibirTexto('h1', 'O jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor.');
        } else {
            exibirTexto('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numerosDisponiveis + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 
  
  if(quantidadeDeElementosNaLista == numerosDisponiveis) {
   listaDeNumerosSorteados = [] ;
   }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}