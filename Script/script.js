function insert(num) {

    var numero =document.getElementById("p").innerHTML;
    document.getElementById("p").innerHTML = numero + num;
    
}

function clean() {
    document.getElementById("p").innerHTML = " ";
}

function back() {
    var back = document.getElementById("p").innerHTML;
    document.getElementById("p").innerHTML = back.substring(0, back.length -1);
}

function calcular() {
    
    var resultado = document.getElementById("p").innerHTML;
    
    if (resultado){
        

    document.getElementById("p").innerHTML = eval(resultado);

}

}