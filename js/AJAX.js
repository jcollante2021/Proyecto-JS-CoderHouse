$(document).ready(traerDatosJSON)
//EL AJAX SE GENERA AL CARGAR LA PAGINA//
function traerDatosJSON(){
    /* $.ajax({
        method: "GET",
        url: URLJSON,
        success: function (res){
            $("#datosListadePrecios").append(`<div class="btnPrecios"><p>${res.nombre} [ $${res.precio} ]</p></div>`)
        }
    }) */

    //TOMA LOS OBJETOS DEL JSON CON EL NOMBRE Y PRECIO Y LOS MUESTRA EN EL DOM COMO LISTA DE PRECIOS//
    $.getJSON("../data/data.json", function (res, status){
        if(status === "success"){
            let misDatos = res;
            for (const dato of misDatos){
                $("#datosListadePrecios").append(`<div class="btnPrecios"><p>${dato.nombre} [ $${dato.precio} ]</p></div>`)
            }
        }
    })
}

//BOTONES PARA ENTRAR Y SALIR DE LA LSITA DE PRECIOS//

$("#btnListaDePrecios").click(() => {$("#overlayPrecios").css("visibility", "visible")})

$("#btnSalirPrecios").click(() => {$("#overlayPrecios").css("visibility", "hidden")})

