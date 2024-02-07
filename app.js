
let listadeNumerosTentados = [];
let tentativas = 1;
let botaoReiniciar;
gerarNumeroSecreto()


function gerarNumeroSecreto(){
    let numeroMaximo = 10;
    numeroSecreto = Math.floor(Math.random() *numeroMaximo+1);
}

function verificarChute(){
    let chute = document.querySelector('input').value
    let textoAdivinhe = document.querySelector('.container__texto p');
    let iniciar = document.getElementById("iniciar").disabled = false; 
    let campoNome = document.querySelector('input');
    campoNome.value  = "";

    //Bloquear número que já tentou;
    if (listadeNumerosTentados.includes(chute) == true){
        alert ('Você já tentou este número!!')
        return;
    }
    // Não constar +1 tentativa se digitar em branco
    if (chute == ''){
        alert ('Digite um número!!')
        iniciar; 
        return;
    }
//let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        textoAdivinhe.innerHTML = `É isso ai, você descobriu o Número Secreto (${numeroSecreto}) com (${tentativas}) ${palavraTentativa}!! `;
        iniciar;
        botaoReiniciar = document.getElementById("reiniciar").removeAttribute('disabled');
        document.getElementById("iniciar").disabled = true;
    }else if (chute > numeroSecreto){
        textoAdivinhe.innerHTML = 'O Número é menor!!';
        listadeNumerosTentados.push(chute);
    } else {
         textoAdivinhe.innerHTML = 'O Número é maior!!';
         listadeNumerosTentados.push(chute);
    } 

     if(tentativas >= 3 ){
        if( chute == numeroSecreto){
            textoAdivinhe.innerHTML = `É isso ai, você descobriu o Número Secreto (${numeroSecreto}) com (${tentativas}) ${palavraTentativa}!! `;;
        } else {
         textoAdivinhe.innerHTML = 'Você Perdeu!!';
         campoNome.value  = "";
        iniciar;
        reiniciar;
        tentativas = 1;
        gerarNumeroSecreto()
        listadeNumerosTentados = [];
        document.getElementById("reiniciar").disabled = false;
        document.getElementById("iniciar").disabled = true;}
     }

    tentativas++;
    }

function reiniciarJogo(){
    let textoVoltar = document.querySelector('.container__texto p')
    let reiniciar = document.getElementById("reiniciar").disabled = true;
    let iniciar = document.getElementById("iniciar").disabled = false;
    let campoNome = document.querySelector('input');
  if (reiniciar){
        textoVoltar.innerHTML = 'Você tem 3 tentativas para acertar um número entre 1 a 10!!';
        campoNome.value  = "";
        iniciar;
        reiniciar;
        tentativas = 1;
        gerarNumeroSecreto()
        listadeNumerosTentados = [];
        
    }
}


