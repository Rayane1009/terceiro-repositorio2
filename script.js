const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorA11('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    //tamanhoSenha = tamanhoSenha-1;
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha  < 20{
        tamanhoSenha++;
    }
        numeroSenha.textContent = tamanhoSenha;
    }
