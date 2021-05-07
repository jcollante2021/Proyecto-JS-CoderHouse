const URLJSON = '../data/data.json'

$(document).ready(traerDatosJSON)

function traerDatosJSON(){
    $.getJSON(URLJSON, function (res, status){
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

