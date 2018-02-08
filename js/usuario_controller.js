function login (){
    var usuario = {
        usuario: $('#usuario').val(),
        password: $('#pass').val(),
        metodo: "select"
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "POST",
        data: usuario,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            if (usuario_response == "Error") {
                $('#mensaje').text("El usuario digitado no existe");
            } else {
                var usuarioGuardado = JSON.parse(usuario_response);
                if (usuarioGuardado.contrasena == usuario.password) {
                    sessionStorage.setItem("usuarioLogueado", usuario_response);
                    if(usuarioGuardado.rol == '0'){
                        window.location.href = "admin.html";
                    }else{
                        window.location.href = "index.html";
                    }
                } else {
                    $('#mensaje').text("El password es incorrecto");
                }
            }
        }
    });
    return false;
}
function logout(){
    sessionStorage.removeItem('usuarioLogueado');
    window.location.href = 'index.html';
}


function registro(){
    var usuario ={
        usuario: $('#usuario').val(),
        password: $('#pass').val(),
        nombre: $('#nombre').val(),
        correo: $('#correo').val(),
        pregunta: $('#pregunta').val(),
        respuesta: $('#respuesta').val(),
        direccion: $('#direccion').val(),
        telefono: $('#telefono').val(),
        metodo: 'registro'
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "POST",
        data: usuario,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            if (usuario_response == 'Exito'){
                alert('Se ha registrado con exito');
                window.location.href = 'login.html';
            }else {
                alert('Se ha producido un error al registrarse');
                }

            }
    });
    return false;
}
function traerUsuario(id){
    var usuario ={
        id: id,
        metodo: 'traerUsuario'
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "POST",
        data: usuario,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
       success: function (usuario_response){
           $('#usuario').val(usuarioGuardado.usuario);
           $('#pass').val(usuarioGuardado.contrasena);
           $('#nombre').val(usuarioGuardado.nombre);
           $('#correo').val(usuarioGuardado.correo);
           $('#telefono').val(usuarioGuardado.telefono);
           $('#pregunta').val(usuarioGuardado.pregunta_secreta);
           $('#respuesta').val(usuarioGuardado.respuesta);
           $('#direccion').val(usuarioGuardado.direccion);
           $('#id').val(usuarioGuardado.idUsuarios);
       }
    });
}
function editar(){
    var usuario ={
        usuario: $('#usuario').val(),
        contrasena: $('#pass').val(),
        nombre: $('#nombre').val(),
        correo: $('#correo').val(),
        pregunta_secreta: $('#pregunta').val(),
        respuesta: $('#respuesta').val(),
        direccion: $('#direccion').val(),
        telefono: $('#telefono').val(),
        idUsuarios: $('#id').val(),
        metodo: 'editar'
    }
    $.ajax({
        url: "../php/usuario.php",
        method: "POST",
        data: usuario,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (usuario_response) {
            if (usuario_response == 'Exito'){
                alert('Se ha registrado con exito');
                sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
                window.location.href = 'miPerfil.html';
            }else {
                alert('Se ha producido un error al registrarse');
                }

            }
    });
    return false;
}