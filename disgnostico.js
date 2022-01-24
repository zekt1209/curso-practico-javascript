let nombre = 'Victor';
let apellido = 'Guzman';
let nombreUsuario = 'Victor Guzman';
let edad = 21;
let email = 'victor_27edge@hotmail.com';
let mayorEdad = true;
let dineroAhorrado = 10000;
let deudas = 1500;

let fullName = nombre + apellido;
let dineroReal = dineroAhorrado - deudas;




const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function saludoPresentacion(completeName, nickname){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}





const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");   
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");    
}else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Suscribete a platzi! ");
}


 /* Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
 
 indexOf = saca la posicion  donde se encuentra dicho valor en el arreglo 
 */ 
const suscripciones = ["Free", "Basic", "Expert", "Expert+"];
const respuestas=["Solo puedes tomar los cursos gratis",
                  "Puedes tomar casi todos los cursos de Platzi durante un mes",
                  "Puedes tomar casi todos los cursos de Platzi durante un año",
                  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

let tipoDeSuscripcion = "Expert";

let index = suscripciones.indexOf(tipoDeSuscripcion);

if(index == -1){
    console.error("No existe este plan :(");
}else{
    console.log(respuestas[index]);
}


// Ciclos
// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

// 1.-
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while(i<5){
    console.log("El valor de i es: " + i);
    i++;
};

// 2.-
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;

while (i >= 2){
    console.log("El valor de i es: " + i);
    i--;
};

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta = 0;

do{
    respuesta = parseInt(prompt("Cuanto es 2 + 2?: "));
    if(!(respuesta === 4)){
        alert("ERROR! Intentalo de nuevo ...");
        respuesta = 0;
    }
}while(!(respuesta === 4));

alert(`Correcto, respuesta correcta: ${respuesta}`);

// Listas
// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let array = ["Manzana", "Platano", "Ciruelas", "Cerezas"];

function recibirArray(arreglo){
console.log(arreglo[0]);
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).


function imprimirArray(arreglo){
    for(let i = 0; i <= array.lenght; i++){
        console.log(arreglo[i]);
    }
}

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let objeto = {
    nombre: "Objeto",
    tipo: "Object",
    calidad: "Elevada",
}

// Funcion constructora
function objeto(){
    this.nombre = nombre;
    this.tipo = tipo;
    this.calidad = calidad;
}

let arregloDeObjetos = [];

function crearNuevoObjeto(nombre, tipo, calidad){
    nombre = prompt("Nombre del objeto: ");
    tipo = prompt("Tipo del objeto: ");
    calidad = prompt("Calidad del objeto: ");

    arregloDeObjetos.push(new objeto(nombre, tipo, calidad));
}

function imprimirObjetos(arregloDeObjetos){
    for (let i=0; i <= arregloDeObjetos.length; i++){
        console.log(arregloDeObjetos[i]);
    }
}