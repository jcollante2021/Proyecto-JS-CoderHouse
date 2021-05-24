$("#btnBorrarPedido").click(reiniciarPedido)


//Reinicia los valores a 0 de todos los ARRAY, las caracteristicas del CSS y eliminar todos los IMG//
function reiniciarPedido(){
        $("#cajaImgSandwich").empty()
        $("#divVegetalesSeleccionados").empty()
        cssTopVegetales = 70
        zIndex = 2
        arrayIngredientes = [];
        arrayVegetales = [];
        arrayParaFacturar = [];
        arrayParaFacturarPan = [];
        arrayParaFacturarProteina = [];
        arrayParaFacturarVegetales = [];
        arrayParaFacturarQueso = [];
        precioTotal = 0;
}


$("#botonFinalizar").click(finalizarCompra);

//La funcion de Finalidad compra concatena todos los ARRAYs para formar un único array para Facturar y tomar el valor de cada ingrediente//
//Además de usar los Input del ultimo formulario para mostrarlo en el DOM//
function finalizarCompra(){
        let nombrePersonal = $("#datosPersonalesNombre").val()
        let direccionPersonal = $("#datosPersonalesDireccion").val()
        let localidadPersonal = $("#datosPersonalesLocalidad").val()
        facturar = arrayParaFacturar.concat(arrayParaFacturarPan, arrayParaFacturarProteina, arrayParaFacturarQueso, arrayParaFacturarVegetales)
        for (const ingredientes of facturar) {
                precioTotal = ingredientes.precio + precioTotal;
        }
        $("#overlayTotal").css("visibility", "visible");
        $("#divTotal").append(`<strong><h3 id="tituloFinal">Total a abonar: $${precioTotal}</h3></strong><span id="tituloFinalSaludo">¡Hola ${nombrePersonal} tu pedido se enviará a ${direccionPersonal}, ${localidadPersonal}!<br>¡Esperamos que disfrutes tu CHAMBUCHITO de ${proteina} en pan ${pan}! <br> ¡VUELVA PRONTO! </span>`)
}

$("#btnRecargar").click( () => {location.reload()})