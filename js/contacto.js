

let nombre = prompt("Indica tu nombre")
alert (`Bienvenido a nuestra Web, ${nombre}!`)
let apellido = prompt("Indica apellido")
let email = prompt("Indica tu e-mail")
let telefono = prompt("Indica tu teléfono")
let direccion = prompt("Indica tu dirección")
let mensaje = prompt("¿Cómo podemos ayudarte? Comentanos tu situación")

let presentacion = `Hola soy ${nombre} y ${apellido}, mi e-mail es ${email}, mi teléfono es ${telefono}, mi dirección es ${direccion} y mi situación es ${mensaje}`

console.log (presentacion)