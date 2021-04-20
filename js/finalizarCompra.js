document.getElementById("botonFinalizar").addEventListener("click", finalizarCompra);

function finalizarCompra(){
        let agregaPanFinal = document.createElement("img");
        agregaPanFinal.src="./img/panBlanco2.png";
        agregaPanFinal.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+60}px; left: 220px`);
        contenedorVegetales.appendChild(agregaPanFinal)
        alert("¡LISTO! Gracias por comprar en CHAMBUCHITO.COM\n\nDetalle del Pedido:\n" + arrayIngredientes.join("\n"));
        alert("Total a abonar: $ " + precioTotal + "\n\n¡VUELVA PRONTO!");
}
