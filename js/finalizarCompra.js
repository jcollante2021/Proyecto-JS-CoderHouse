$("#botonFinalizar").click(finalizarCompra);

function finalizarCompra(){
        $("#cajaImgSandwich").prepend(`<img id="imgTopPan" src="./img/panBlanco2.png">`);
                $("#imgTopPan").css("z-index", `${calcular_Z_Index()}`)
                $("#imgTopPan").css("bottom" , `${calcular_bottom_css()}px`)
        $("#tituloPedido").addClass("desactivado")
        $("#formPedido").addClass("desactivado")
        $("#tituloDetalle").addClass("activo")
        $("#formDetalle").addClass("activo")
        for (ingredientes of arrayIngredientes) {
                $("#formDetalleLista").append(`<li> ${ingredientes} </li>`)
            }
        $("#formDetalle").append(`<strong><h3>Total a abonar: $${precioTotal}</h3></strong> <br> ¡Esperamos que disfrutes tu CHAMBUCHITO de ${proteina} en pan ${pan}! <br> ¡VUELVA PRONTO!`)
}
