$("#btnBorrarPedido").click(reiniciarPedido)

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
        $("#cajaImgSandwich").prepend(`<img id="imgTopPan" src="./img/panBlanco2.png">`);
                $("#imgTopPan").css("z-index", `${calcular_Z_Index()}`)
                $("#imgTopPan").css("bottom" , `${calcular_bottom_css() + 20}px`)
        $("#tituloPedido").addClass("desactivado")
        $("#formPedido").addClass("desactivado")
        $("#tituloDetalle").addClass("activo")
        $("#formDetalle").addClass("activo")
        for (ingredientes of arrayIngredientes) {
                $("#formDetalleLista").append(`<li> ${ingredientes} </li>`)
            }
        $("#formDetalle").append(`<strong><h3>Total a abonar: $${precioTotal}</h3></strong> <br> ¡Esperamos que disfrutes tu CHAMBUCHITO de ${proteina} en pan ${pan}! <br> ¡VUELVA PRONTO!`)
}
