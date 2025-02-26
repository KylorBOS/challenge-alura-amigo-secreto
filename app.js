// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreSecreto = "";
let listaAmigos = [];
let elementoLista = "";

function agregarAmigo() {
  nombreSecreto = document.getElementById("amigo").value;
  console.log(nombreSecreto);
  //Si no se ha introducido ningún nombre, se mostrará un mensaje de error
  if (nombreSecreto === "") {
    alert("El campo no puede estar vacío, ingresa un nombre válido");
  }

  if (listaAmigos.includes(nombreSecreto)) {
    alert("Este nombre ya se encuentra en la lista");
  }
  //De lo contrario se agregará a la lista de amigos
  else listaAmigos.push(nombreSecreto);

  limpiarCajaTexto();
  console.log(listaAmigos);
  mostrarAmigos();
}

function limpiarCajaTexto() {
  document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
  //Creamos una nueva lista en la que se almacenarán los nombres que ya están agregados en la listaAmigos
  let listaAgregados = [];
  elementoLista = document.getElementById("listaAmigos");
  //Inicializamos el elementoLista como vacío por si ya existe un nombre en la listaAgregados
  elementoLista.innerHTML = "";

  //Recorremos la listaAmigos y capturamos cada nombre que se encuentra en la lista
  for (let i = 0; i < listaAmigos.length; i++) {
    const nombreInscrito = listaAmigos[i];

    //Verificamos si el nombre inscrito aún no se encuentra en la listaAgregados
    if (!listaAgregados.includes(nombreInscrito)) {
      listaAgregados.push(nombreInscrito);
      elementoLista.innerHTML += `<li> ${nombreInscrito} </li>`;
    }
  }
  console.log(listaAgregados);
}

function sortearAmigo() {
  let nombreGenerado = String(Math.floor(Math.random() * listaAmigos.length));
  elementoLista = document.getElementById("resultado");
  elementoLista.innerHTML = `<li> Tu amigo secreto es : ${listaAmigos[nombreGenerado]} </li>`;
  limpiarLista();
}

function limpiarLista() {
  elementoLista = document.getElementById("listaAmigos");
  elementoLista.innerHTML = "";
}
