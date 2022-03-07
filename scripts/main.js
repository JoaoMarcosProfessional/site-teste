/*
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === './imagens/firefox.svg') {
        minhaImagem.setAttribute('src', './imagens/edge.png');
    } else {
        minhaImagem.setAttribute('src', './imagens/firefox.svg');
    }
}
*/

let h1 = document.querySelector('h1');
let img = document.querySelector('img');
let botao = document.querySelector('button');

img.onclick = function () {
    if(img.style.filter == 'grayscale(0)') {
        img.style.filter = 'grayscale(100)';
    } else {
        img.style.filter = 'grayscale(0)';
    }
}

function defineNomeUsuario() {
    let nome = prompt('Por favor, digite seu nome:');
    if(!nome || nome == null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', nome);
        h1.textContent = 'Mozilla é legal, ' + nome;
    }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    h1.textContent = 
    `Mozilla é legal, ${localStorage.getItem('nome')}`;
}

botao.onclick = function () {
    defineNomeUsuario();
}