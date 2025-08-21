// Este código es para gener un sorteo entre varios nombres para al final elegir uno de ellos

//Lista en donde se registran los nombres

let amigos = [];

// Agregar un nuevo amigo

function agregarAmigo(){
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

   //Validar que el inpout no esté vacío 
    if (nombre === ""){
    alert("Por favor, ingresa un nombre válido");
    return;    
    }

   //Agregar el nombre a la lista
    amigos.push(nombre);

   //Limpiar el input para un nuevo intento
    input.value = "";
    
   //Mostrar la lista mas reciente
    mostrarLista(); 
}

//Mostrar los amigos en la lista HTML
 function mostrarLista() {
   const lista =document.getElementById("listaAmigos");
   lista.innerHTML = "";  

   amigos.forEach(n =>{
    const li = document.createElement("li");
    li.textContent = n;
    lista.appendChild(li);
    });
 }


 //Sorteo de los nombres para generar un amigo secreto 
 function sortearAmigo(){
  const resultado = document.getElementById("resultado");

  //Validar que haya suficientes nombres para el sorteo 
  if (amigos.length < 2){
   alert ("Debes ingresar al menos 2 nombres para realizar un sorteo.");
   return; 
  }
 

 //Generamos un indice aleatorio
const indice = Math.floor(Math.random() * amigos.length);
const amigoSecreto = amigos[indice];

//Mostar el resultado del sorteo
resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
 }