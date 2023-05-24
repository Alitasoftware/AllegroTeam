let menuVisible = false;
// Mostrar-Ocultar Menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = true; 
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = false; 
    }
}

//Ocultar Menu una vez seleccionado
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}
const API_URL = "https://jsonplaceholder.typicode.com"

const HTMLResponse = document.querySelector("#coments")


fetch(`${API_URL}/comments`)
.then(response => response.json())
.then((users) => {
    const selectedUsers = users.slice(0,3);
    const tpl = selectedUsers.map((user) =>` <div class="testimonial-box">
    <div class="box-top">
        <strong>${user.name}</strong>
        <span>${user.email}</span>                      
    </div>
    <div class="comment">
        <i class="fa-solid fa-quote-left"></i>
        <p>${user.body}</p>
    </div>
    </div>

`);

    HTMLResponse.innerHTML = `<div class="testimonial-box-container" id="coments">${tpl}</div>`;
});

//Formulario
function validar(){
    var nombre, telefono, correo, asunto, mensaje, expresion;
    nombre = document.getElementById("name").value;
    telefono = document.getElementById("phone").value;
    correo = document.getElementById("email").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || telefono === "" || correo === "" || asunto === "" || mensaje === ""){
        alert("Por favor, complete todos los campos");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El teléfono ingresado no es un número");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    else if(asunto.length > 30){
        alert("El asunto es muy largo (Max 30 caracteres)");
        return false;
    }
    else if(mensaje.length > 200){
        alert("El mensaje es muy largo (Max 200 caracteres)");
        return false;
    }
}