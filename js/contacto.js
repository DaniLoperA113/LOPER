/*let dbUsuarios = JSON.parse(localStorage.getItem('usuarios'))*/
/*dbUsuarios ["nombre"]["email"]["password"];*/
/*
let dbUsuarios = "./usuarios.json";
let usuariosJSON = fs.readFileSync (dbUsuarios, "utf-8");
let usuariosArray = JSON.parse (usuariosJSON);
module.exports = usuariosArray;
*/
/*
window.addEventListener('load', function(){
const formulario = document.getElementById('form-login');
let inputName = document.querySelector('#nombre');
let inputEmail = document.querySelector('#email');
let inputContraseña = document.querySelector('#password');
let divContenido = document.querySelector('#divContenidoRegister');
let usuario = `${sessionStorage.getItem('nombre')} ${sessionStorage.getItem('email')}${sessionStorage.getItem('password')}`;
let mensajeDeBienvenida = `Bienvenido ${sessionStorage.getItem('usuario')} a nuestra página`;

    formulario.addEventListener('submit', function(event) {
        
        event.preventDefault();

        let errores = [];
        let usuarioEncontrado = false;
        let nombreDelUsuario;
        
        if(inputName.value.length < 3){
            errores.push('El campo nombre debe tener al menos 4 caracteres')
            } else if(inputContraseña.value.length < 4){
            errores.push('La contraseña debe contener al menos 4 caracteres.');
        };
        inputNombre.addEventListener('focus', () => {
        inputNombre.style.backgroundColor = 'yellow'
        });
        for(let i=0; i< dbUsuarios.length ; i++){ 
            dbUsuarios[i].email === inputEmail.value ? usuarioEncontrado = true : usuarioEncontrado = false; 
            dbUsuarios[i].password == inputContraseña.value && inputContraseña.value.length > 4 ? usuarioEncontrado = true : usuarioEncontrado = false;
            nombreDelUsuario = dbUsuarios[i].nombre;
            };         
        while (divContenido.firstChild) {
            divContenido.removeChild(divContenido.firstChild);
        };
        if (errores.length > 0) {
            let ulErrores = document.createElement('ul');
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]} </li>`
            };
            divContenido.appendChild(ulErrores);
        } else {
            if(usuarioEncontrado === true){
                alert('El email ya se encuentra registrado!!')
                let mensajeDeRespuesta = document.createElement('p');
                mensajeDeRespuesta.innerHTML = `El email ${inputEmail.value} ya se encuentra registrado.`;
                divContenido.appendChild(mensajeDeRespuesta);
            };
    
            if(usuarioEncontrado === false){
                usuario = {
                    nombre: inputName.value,
                    email: inputEmail.value,
                    password: inputContraseña.value
                };

                dbUsuarios.push(usuario);

                localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
                sessionStorage.setItem('usuario', inputName.value);
                alert(`Gracias ${inputName.value} por registrarte en nuestra página!!.`);
                let enlace = document.createElement('div');
                enlace.innerHTML = `<a class='btn' href='../index.html'>Te invitamos ir a la sección Inicio</a>`;
                divContenido.appendChild(enlace);
            } ;
        } ;
    });
})

*/
/*let dbUsuarios = require (/js/usuarios.js)*/
/*    [   
        {
            nombre : "nombre",
            email : "email",
            password : "password"
        },
        {
            nombre : "daniela",
            email : "daniela@gmail.com",
            password : "1234"
        },
        {
            nombre : "jimena",
            email : "jimena@gmail.com",
            password : "5678"
        },
        {
            nombre : "lorelei",
            email : "lorelei@gmail.com",
            password : "9123"
        }
    ]
*/
window.addEventListener('load', function(){
    let db = localStorage.getItem("usuarios");
    let dbUsuarios = JSON.parse(db);
    const formulario = document.getElementById('form-login');
    let inputNombre = document.querySelector('#nombre');
    let inputEmail = document.querySelector('#email');
    let inputPassword = document.querySelector('#password');
    let respuesta = document.querySelector('#divContenidoLogin');
console.log (formulario, inputNombre, inputEmail, inputPassword)

/*    form-control.addEventListener('focus', () => {
        form-control.style.backgroundColor = 'yellow'
        }); */ 
          
formulario.addEventListener('submit', function(event) {
        
    event.preventDefault();

    let errores = [];
    let nombreDelUsuario;
    let usuarioEncontrado = false;
    let mensajeDeRegistro;

    if(inputNombre.value.length < 3){
            errores.push('El campo nombre debe tener al menos 4 caracteres')
            } else if(inputPassword.value.length < 4){
            errores.push('La contraseña debe contener al menos 4 caracteres.');
        };

    for(let i=0; i< dbUsuarios.length ; i++){ 
        if (dbUsuarios[i].email === inputEmail.value) {
            usuarioEncontrado = true;
            errores.push('El email ya se encuentra registrado.');
        } if (dbUsuarios[i].password == inputPassword.value) {
            
        }
         ? nombreDelUsuario = dbUsuarios[i].nombre : "";
    }; 
    if (errores.length > 0) {
        
    } else {
        if(usuarioEncontrado === false){
        dbUsuarios.push({
            nombre: inputNombre.value,
            email: inputEmail.value,
            password: inputPassword.value
        })
        localStorage.setItem ('usuarios', JSON.stringify(dbUsuarios)); mensajeDeRegistro = `Bienvenido ${inputNombre.value} a nuestra página`
    } else {
        mensajeDeRegistro = `Bienvenido ${nombreDelUsuario} a nuestra página`
    }
    console.log(mensajeDeRegistro);
    respuesta.innerHTML = `<p> ${mensajeDeRegistro} </p>`;
    inputNombre.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    }   
})
})
/*
    
    
    while (divContenido.firstChild) {
        divContenido.removeChild(divContenido.firstChild);
    };
    
        let ulErrores = document.createElement('ul');
        for(let i = 0; i < errores.length; i++){
            ulErrores.innerHTML += `<li> ${errores[i]} </li>`
        };
        divContenido.appendChild(ulErrores);
    } else {
        if(usuarioEncontrado === true){
            alert('El email ya se encuentra registrado!!')
            let mensajeDeRespuesta = document.createElement('p');
            mensajeDeRespuesta.innerHTML = `El email ${inputEmail.value} ya se encuentra registrado.`;
            divContenido.appendChild(mensajeDeRespuesta);
        };

        if(usuarioEncontrado === false){
            usuario = {
                nombre: inputName.value,
                email: inputEmail.value,
                password: inputContraseña.value
            };

            dbUsuarios.push(usuario);

            localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
            sessionStorage.setItem('usuario', inputName.value);
            alert(`Gracias ${inputName.value} por registrarte en nuestra página!!.`);
            let enlace = document.createElement('div');
            enlace.innerHTML = `<a class='btn' href='../index.html'>Te invitamos ir a la sección Inicio</a>`;
            divContenido.appendChild(enlace);

            */