function subscripcion(){
let bienvenida = alert `Bienvenida, ¿querés recibir novedades relacionadas a nuestra página?`

let nombre = prompt `¿Cuál es tu nombre?`

let email = prompt `Por favor, dejanos un email donde recibir las novedades`

if (bienvenida !== null) {
   alert (nombre)

} else if (nombre !== null){
   alert (email)

}else (email !== null) ; {
    alert (`Bienvenida ${nombre} a nuestro newsletter, pronto tendrás novedades.`)
}

localStorage.setItem ('Suscriptor', nombre);

localStorage.setItem ('mailSuscriptor', email);

const usuarioNuevo = localStorage.getItem('nombre','email');

const usuarioConvertido =JSON.stringify(usuarioNuevo);

const usuarioConvertido2 = JSON.parse(usuarioConvertido)
}
