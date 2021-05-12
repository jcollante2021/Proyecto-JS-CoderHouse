$(document).ready(verificar)

function verificar(){
    //Busca el objeto que hay en el SessionStorage //
    let usuario = sessionStorage.getItem("user")
    objeto = JSON.parse(usuario)
    //Verificar que el SessionStorage este Vacio//
    if (objeto == null){
        overley = $("#overlay");
        overley.addClass("activo");
        $("#botonConfirmar").click(agregarNombre);
        function agregarNombre(){
            inputNombre = $("#inputNombre").val();
            $("#nombrePersonalizado").text(`${inputNombre}`)
            objeto = inputNombre
            overley.removeClass("activo")
            myJSON = JSON.stringify(objeto)
            sessionStorage.setItem("user", myJSON)
            //Guarda el Nombre en el SessionStorage//
        }   
    }
    else{
        //Muestra el nombre que encontro en el SessionStorage en el DOM//
        $("#nombrePersonalizado").text(`${objeto}`)
    }
}