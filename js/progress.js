//AL DAR EL PRIMER CONTINUAR  COMPLETA EL IMG Y CIERRA LOS ARRAYS DEL TOTAL//

$("#botonContinuar1").click( () => {

    if (arrayIngredientes.length == 0) {
        alert("DEBE SELECCIONAR AL MENOS 1 INGREDIENTE PARA CONTINUAR")
    }
    else{
        $("#formPedido").css("left", "-700px")
        $("#formDatosPersonales").css("left", "15px")
        $("#progress").css("width", "66%")
        $("#cajaImgSandwich").prepend(`<img id="imgTopPan" src="./img/panBlanco2.png">`);
        $("#imgTopPan").css("z-index", `${calcular_Z_Index()}`)
        $("#imgTopPan").css("bottom" , `${calcular_bottom_css() + 20}px`)
        for (ingredientes of arrayIngredientes) {
            $("#formDetalleLista").append(`<li> ${ingredientes} </li>`)
        }
    }
    
})

//METODO PARA QUE CADA BOTON VAYA HACIA ATRAS Y ADELANTE//

$("#btnVolver1").click(() => {
    $("#formPedido").css("left", "15px")
    $("#formDatosPersonales").css("left", "700px")
    $("#progress").css("width", "33%")
})

$("#botonContinuar2").click( () => {
    $("#formDatosPersonales").css("left", "-700px")
    $("#formDetalle").css("left", "15px")
    $("#progress").css("width", "100%")
})

$("#btnVolver2").click(() => {
    $("#formDetalle").css("left", "700px")
    $("#formDatosPersonales").css("left", "15px")
    $("#progress").css("width", "66%")
})
