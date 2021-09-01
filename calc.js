var tela
var resultado
function botao(num){
    tela = document.getElementById('visor').value += num;
}


function reseta(){
    tela = document.getElementById('visor').value = " ";
}


function calculo(){
    resultado = eval(tela);
    document.getElementById('visor').value = resultado;
}