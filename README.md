# Juego-del-amigo-secreto
Este código nos puede ayudar a generar un sorteo entre varios nombres agregados a una lista por el usuario.



Funcionalidades

-Agregar nombres a una lista.

-Visualizar todos los amigos ingresados.

-Sortear aleatoriamente un amigo secreto.

-Validación para evitar entradas vacías.


Pantalla inicial con el cuadro de texto y botón de añadir.
<img width="1896" height="910" alt="image" src="https://github.com/user-attachments/assets/f05c9a53-0eae-4646-85f6-efc7b2ca9005" />

Lista con nombres añadidos.
<img width="1893" height="911" alt="image" src="https://github.com/user-attachments/assets/b526b708-5177-4457-8602-080de26b7456" />





Interfaz amigable y responsiva.


Tecnologías usadas

-HTML5 para la estructura.

-CSS3 para estilos.

-JavaScript (DOM y Math.random) para la lógica del sorteo.


Cómo usarlo

-Clona el repositorio:

-git clone: https://github.com/EmilioSaulG/Juego-del-amigo-secreto.git 

-Abre index.html en tu navegador.

-Ingresa nombres en el cuadro de texto.

-Todo listo para comenzar tu sorteo



El código permite:

Registrar los nombres de los participantes en una lista.

Mostrar la lista de participantes en la página web.

Realizar un sorteo aleatorio y mostrar el nombre del amigo secreto seleccionado.

Estructura del Código
Variables
let amigos = [];


amigos: Es un arreglo que almacena los nombres de los participantes.

Funciones
1. agregarAmigo()
function agregarAmigo() { ... }


Toma el valor ingresado en un input de la página.

Verifica que no esté vacío. Si está vacío, muestra un alert.

Agrega el nombre al arreglo amigos.

Limpia el input para ingresar un nuevo nombre.

Llama a mostrarLista() para actualizar la lista de participantes en la página.

2. mostrarLista()
function mostrarLista() { ... }


Selecciona el contenedor HTML donde se mostrará la lista (listaAmigos).

Limpia el contenido previo.

Recorre el arreglo amigos y agrega cada nombre como un elemento <li> en la lista HTML.

3. sortearAmigo()
function sortearAmigo() { ... }


Selecciona el contenedor HTML donde se mostrará el resultado (resultado).

Verifica que haya al menos 2 nombres para realizar el sorteo.

Genera un índice aleatorio entre 0 y amigos.length - 1.

Selecciona el nombre correspondiente a ese índice y lo muestra en pantalla.

Uso

Ingresa los nombres de los participantes en el campo de texto y presiona un botón que llame a agregarAmigo().

Verás la lista de nombres actualizada en la página.

Una vez ingresados al menos 2 nombres, presiona un botón que llame a sortearAmigo().

El resultado mostrará el nombre del amigo secreto seleccionado aleatoriamente.
