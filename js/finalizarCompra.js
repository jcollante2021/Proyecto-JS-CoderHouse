$("#btnBorrarPedido").click(reiniciarPedido)


//Reinicia los valores a 0 de todos los ARRAY, las caracteristicas del CSS y eliminar todos los IMG//
function reiniciarPedido(){
        $("#cajaImgSandwich").empty()
        $("#divVegetalesSeleccionados").empty()
        cssTopVegetales = 70
        zIndex = 2
        arrayIngredientes = [];
        arrayVegetales = [];
        precioTotal = 0;
}


$("#botonFinalizar").click(finalizarCompra);

function finalizarCompra(){
        $("#formDetalle").append(`<strong><h3 id="tituloFinal">Total a abonar: $${precioTotal}</h3></strong> <br> <span id="tituloFinalSaludo">¡Esperamos que disfrutes tu CHAMBUCHITO de ${proteina} en pan ${pan}! <br> ¡VUELVA PRONTO! </span>`)
}
