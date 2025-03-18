// Lista de amigos.
let amigos = [];

function parrafo(elemento, texto) {
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto;
    return;
}

function limpiar() {
    document.getElementById('amigo').value = "";
}

function agregarAmigo() {
    // Obtengo el dato del input.
    let entrada = document.getElementById('amigo').value.trim();
    
    // Valido si el dato esta vacio o hay un nombre.
    if (entrada === '') {
        parrafo('p','Argumento invalido');
    } else {
        parrafo('p','Nombre ingresado');
        // Guardo el dato en la lista
        amigos.push(entrada);
        console.log(amigos);
        actualizarLista()
    }
    // Limpiar input.
    limpiar();
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado')
    let li = document.createElement("li");
    
    if(amigos.length === 0) {
        parrafo('p',"No tenes suficientes amigos.")
        return;
    }
    
    let amigosAleatorios = Math.floor(Math.random() * amigos.length);
    li.textContent = amigos[amigosAleatorios];
    resultado.appendChild(li)
}

