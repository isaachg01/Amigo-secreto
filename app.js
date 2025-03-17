//Arreglo para crear lista de amigos
let amigos = [];

//Función para agregar nombres a la lista
function agregarAmigo() {
    let nombreInput = document.getElementById("amigo");
    let nombre = nombreInput.value.trim();
    
    if (nombre !== "") {
        amigos.push(nombre);
        nombreInput.value = "";
        actualizarLista();
        document.getElementById("listaAmigos").style.display = "block";
        document.getElementById("resultado").innerHTML = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

//Función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

//Función para sortear un nombre de la lista de amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML =`No hay nombres en la lista de amigos para sortear.`; 
        return;    
    } 
    if (amigos.length === 1) {
        document.getElementById("resultado").innerHTML =`Agrega más de un nombre en la lista de amigos.`; 
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`; 
    document.getElementById("listaAmigos").style.display = "none";
    amigos = [];
}
