$(document).ready(verificar)

function verificar(){
    let usuario = sessionStorage.getItem("user")
    objeto = JSON.parse(usuario)
    if (objeto == null){
        overley = $("#overlay");
        overley.addClass("activo");
        $("#botonConfirmar").click(agregarNombre);
        function agregarNombre(){
            inputNombre = $("#inputNombre").val();
            $("#nombrePersonlizado").text(`${inputNombre}`)
            objeto = inputNombre
            overley.removeClass("activo")
            myJSON = JSON.stringify(objeto)
            sessionStorage.setItem("user", myJSON)
        }   
    }
    else{
        $("#nombrePersonlizado").text(`${objeto}`)
    }
}