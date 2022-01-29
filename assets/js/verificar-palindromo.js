 const entrada = document.querySelector('input')
const resposta = document.getElementById('resposta')


var $botao = document.getElementById("verficar");
$botao.addEventListener('click', ()=>{
    let string = entrada.value;
    if(!string){// se for null, undefined ou empty
        resposta.innerHTML = 'Sua resposta aparece aqui';
        resposta.style = 'white';
        return;
    } 
        
    for (i in string) {// Remover espaços
        string = string.replace(' ', '');
    }
    
    let stringReversa = string.split('').reverse().join('');
    // Verificar o palindromo
    if(string == stringReversa){
        resposta.innerHTML = 'É palindromo'
        resposta.style.color = "rgb(0, 236, 71)"
    }else{
        resposta.innerHTML = 'Não é palindromo'
        resposta.style.color = "rgba(253, 0, 0, 0.822)"
    }
});