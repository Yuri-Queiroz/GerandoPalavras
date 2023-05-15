let palavra;
let randon;
let escrita;
let imagem;
let elementoPalavra = document.getElementById('mostrarPalavra');
let elementoEscrita = document.getElementById('mostrarEscrita');

let botaoEscrita = document.getElementById('botaoEscrita');
let botaoLimpeza = document.getElementById('botaoLimpeza');

botaoEscrita.disabled = true;
botaoLimpeza.disabled = true;

let palavrasDaCasa = {
    'Porta': {
        escrita:'Door'
    }, 
    'Piso': {
        escrita: 'Floor'
    }, 
    'Parede': {
        escrita: 'Wall'
    }, 
    'Teto': {
        escrita: 'Ceiling'
    }, 
    'Cozinha': {
        escrita: 'Kitchen'
    }, 
    'Cama': {
        escrita: 'Bed'
    },
    'Quarto': {
        escrita: 'Bedroom'
    },
    'Espelho': {
        escrita: 'Mirror'
    },
    'Sofá': {
        escrita: 'Sofa'
    },
    'Janela': {
        escrita: 'Window'
    },
    'Prateleira': {
        escrita: 'Shelf'
    },
    'Pintura': {
        escrita: 'Painting'
    },
    'Assento sanitário': {
        escrita: ' Toilet seat'
    },
    'Pia': {
        escrita: 'Sink'
    },
    'Torneira': {
        escrita: 'Tap'
    },
    'Garagem': {
        escrita: 'Garage'
    },
    'Armário': {
        escrita: 'Wardrobe'
    },
    'Máquina de louça': {
        escrita: 'Washing Machine'
    },
    'Liquidificador': {
        escrita: 'Blender'
    },
    'Gaveta': {
        escrita: 'Drawer'
    },
    'Azulejo': {
        escrita: 'Tile'
    },
    'Relógio': {
        escrita: 'Clock'
    },
    'Microondas': {
        escrita: 'Microwave oven'
    },
    'Mesa': {
        escrita: 'Table'
    }
}

let tamanho = (Object.keys(palavrasDaCasa)).length;


function mostrarEscrita() {
    escrita = Object.values(palavrasDaCasa);
    elementoEscrita.innerHTML = escrita[randon].escrita;
    botaoEscrita.disabled = true;
    imagem = document.createElement('img');
    imagem.src = "botao-play.png";
    imagem.id = 'imagem';
    let localImagem = document.getElementById('imagem');
    localImagem.appendChild(imagem);
}

function gerarPalavra() {
    elementoEscrita.innerHTML = '';
    randon = Math.floor(Math.random() * tamanho);
    palavra = Object.keys(palavrasDaCasa);
    elementoPalavra.innerHTML = palavra[randon];
    botaoEscrita.disabled = false;
    botaoLimpeza.disabled = false;
    if(imagem){
        imagem.parentNode.removeChild(imagem);
    }
}

function limpar() {
    botaoLimpeza.disabled = true;
    botaoEscrita.disabled = true;
    elementoPalavra.innerHTML = '';
    elementoEscrita.innerHTML = '';
    imagem.parentNode.removeChild(imagem);
}

function tocar() {
    let audio = new Audio(`audios/${elementoPalavra.innerText}.mp3`);
    audio.play();
}