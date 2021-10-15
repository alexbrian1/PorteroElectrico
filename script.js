// var visorPiso = "";
// var visorDepto = "";
var contador = "";


function numero(numEnviado) {
    let pisos = document.getElementById("visorPiso").value;
    contador = contador + numEnviado;
    if (contador.length <= 2) {
        document.getElementById("visorPiso").value = pisos + numEnviado;
    }   else if (contador.length == 3){
        document.getElementById("visorDepto").value = numEnviado;
        }
}

function llamar() {
    let pisos = parseInt(document.getElementById("visorPiso").value);
    let depto = parseInt(document.getElementById("visorDepto").value);

    if (pisos >= 0 && pisos <= 42) {
        if (depto >= 1 && depto <= 8) {
            document.getElementById("visorTexto").value = `LLamando al Piso ${pisos}, Departamento ${depto}`;
            
        }else{
            document.getElementById("visorTexto").value = `Ingrese un Departemento valido`;

        }
        
    }else{
        document.getElementById("visorTexto").value = `Ingrese un Piso valido`;

    }
    
}

function borrar() {
    document.getElementById("visorPiso").value = "";
    document.getElementById("visorDepto").value = "";
    document.getElementById("visorTexto").value = "";
    contador = "";



    
    
}