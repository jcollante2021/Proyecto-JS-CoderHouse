const URLJSON = '../data/data.json'

$(document).ready(traerDatosJSON)

function traerDatosJSON(){
    $.getJSON(URLJSON, function (res, status){
        if(status === "success"){
            let misDatos = res;
            for (const dato of misDatos){
                $("#divListaDePrecios").append(`<div class="btnPrecios"><p>${dato.nombre} [ $${dato.precio} ]</p></div>`)
            }
            $("#divListaDePrecios").append(`<div id="btnSalirPrecios">Volver</div>`)
        }
        $("#btnSalirPrecios").click(() => {$("#overlayPrecios").css("visibility", "hidden")})
    })
}

$("#btnListaDePrecios").click(() => {$("#overlayPrecios").css("visibility", "visible")})

