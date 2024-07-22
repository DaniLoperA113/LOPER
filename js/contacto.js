let nombre = prompt("Por favor, indica tu nombre")
if(nombre == "") {
    alert("Por favor, ingresá un nombre")
let nombre = prompt("Por favor, indicá tu nombre")
}
else {
    alert(`Bienvenido a nuestra Web, ${nombre}!`)} 

let apellido = prompt("Por favor, indicá apellido")

let email = prompt("Por favor, indicá tu e-mail")
if(email == "") {
    alert("Este campo no puede estar vacío")
let apellido = prompt("Por favor, indicá tu email")
}
let telefono = prompt("Por favor, indicá tu teléfono")
if(telefono == "") {
    alert("Este campo no puede estar vacío")
let apellido = prompt("Por favor, indicá un teléfono de contacto")
}
let direccion = prompt("Por favor, indicá tu dirección")
let ciudad = prompt("Por favor, indicá tu ciudad")
let cp = prompt("Por favor, indicá tu código postal")
let mensaje = prompt("¿Cómo podemos ayudarte? Comentanos tu situación")
if(mensaje == "") {
    alert("Este campo no puede estar vacío")
let mensaje = prompt("Por favor, indicanos tu situación para poder ayudarte")
}

let presentacion = `Hola soy ${nombre} y ${apellido}, mi e-mail es ${email}, mi teléfono es ${telefono}, mi dirección es ${direccion} y mi situación es ${mensaje}`

// console.log (presentacion)


/* window.addEventListener('load', function(e){
    const formulario = document.querySelector('form');

    let usuarios = [];
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
    })
    console.log(formulario)
}) */