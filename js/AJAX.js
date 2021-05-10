$(document).ready(traerDatosJSON)

function traerDatosJSON(){
    /* $.ajax({
        method: "GET",
        url: URLJSON,
        success: function (res){
            $("#datosListadePrecios").append(`<div class="btnPrecios"><p>${res.nombre} [ $${res.precio} ]</p></div>`)
        }
    }) */
    $.getJSON("../data/data.json", function (res, status){
        if(status === "success"){
            let misDatos = res;
            for (const dato of misDatos){
                $("#datosListadePrecios").append(`<div class="btnPrecios"><p>${dato.nombre} [ $${dato.precio} ]</p></div>`)
            }
        }
    })
}

$("#btnListaDePrecios").click(() => {$("#overlayPrecios").css("visibility", "visible")})

$("#btnSalirPrecios").click(() => {$("#overlayPrecios").css("visibility", "hidden")})

