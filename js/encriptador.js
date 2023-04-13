const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector("#mensaje");


function encriptar(textoEncriptado) {
    
    let convenciones = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    
    textoEncriptado = textoEncriptado.toLowerCase()

        for (let i = 0; i < convenciones.length; i++) {
            if (textoEncriptado.includes(convenciones[i][0])) {
                textoEncriptado = textoEncriptado.replaceAll(convenciones[i][0], convenciones[i][1])
                
            }
            
        }
        return textoEncriptado
        
}

function btnEncriptar() {
    const textoencriptado = encriptar(textArea.value)
    mensaje.value = textoencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.getElementById('copiar').style.display = 'block';
    document.getElementById ('limpiar').style.display = 'block';
    
}

function desencriptar(textoDesencriptado) {
    
    let convenciones = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    
    textoDesencriptado = textoDesencriptado.toLowerCase()

        for (let i = 0; i < convenciones.length; i++) {
            if (textoDesencriptado.includes(convenciones[i][1])) {
                textoDesencriptado = textoDesencriptado.replaceAll(convenciones[i][1], convenciones[i][0])
            }
        }
        return textoDesencriptado
}

function btndesenCriptar() {
    const textoencriptado = desencriptar(textArea.value)

    mensaje.value = textoencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = 'none';
    
    
}

function btncopiar() {
    let mensaje = document.getElementById('mensaje');
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand('copy');
    mensaje.value = "";
    mensaje.style.backgroundImage = 'url(/imagenes/busqueda.gif)';
    
}

function btnlimpiar() {
    location.reload();
}


