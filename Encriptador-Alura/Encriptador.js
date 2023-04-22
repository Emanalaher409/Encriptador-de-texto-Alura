const inputmensaje = document.getElementById('text-area-mensaje');
const inputresultado = document.getElementById('text-area-mensaje-resultante');


const btnEncriptar = document.getElementById('botonencriptar');
const botonDesencriptar = document.getElementById('botondesencriptar');
const botonCopiar = document.getElementById('botoncopiar');





function copiar(){
    var texto_a_copiar= inputresultado


    texto_a_copiar.select();
    texto_a_copiar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(texto_a_copiar.value);

    alert("El siguiente texto ha sido copiado: "+ texto_a_copiar.value);
    inputmensaje.focus();
    inputmensaje.value="";
}
function encriptar(){
    var mensaje = inputmensaje.value;

    // Verificar si el texto contiene letras mayúsculas o caracteres especiales
    var mayusculas = mensaje.match(/[A-Z]/);
    var caracteresEspeciales = mensaje.match(/[^a-zA-Z\s]/);

    if (mayusculas || caracteresEspeciales) {
        alert("Solo se aceptan letras minúsculas y espacios");
    } else {
       
        var mensajeEncriptado = mensaje
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("o","ober")
        .replaceAll("a","ai")
        .replaceAll("u","ufat");
    
        inputresultado.value=mensajeEncriptado;
       
    }
}
function desencriptar() {
    mensajeEncriptado = inputmensaje.value
    mensaje = mensajeEncriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");
     inputresultado.value=mensaje;
}


btnEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptar;
botonCopiar.onclick=copiar;