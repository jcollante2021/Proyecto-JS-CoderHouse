document.getElementById("botonFinalizar").addEventListener("click", finalizarCompra);

function finalizarCompra(){
        let agregaPanFinal = document.createElement("img");
        agregaPanFinal.src="./img/panBlanco2.png";
        agregaPanFinal.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+60}px; left: 200px; width: 350px;`);
        contenedorVegetales.appendChild(agregaPanFinal)
        let tituloPedido = document.getElementById("tituloPedido")
        let formPedido = document.getElementById("formPedido")
        let tituloDetalle = document.getElementById("tituloDetalle")
        let formDetalle = document.getElementById("formDetalle")
        tituloPedido.classList.add("desactivado")
        formPedido.classList.add("desactivado")
        tituloDetalle.classList.add("activo")
        formDetalle.classList.add("activo")
        for (ingredientes of arrayIngredientes) {
                let listaVegetales = document.createElement("li");
                listaVegetales.innerHTML = `${ingredientes}`;
                formDetalle.appendChild(listaVegetales);
            }
        let total = document.createElement("p");
        total.innerHTML = `<strong><h3>Total a abonar: $${precioTotal}</h3></strong> <br> ¡Esperamos que disfrutes tu CHAMBUCHITO de ${proteina} en pan ${pan}! <br> ¡VUELVA PRONTO!`;
        formDetalle.appendChild(total);
}
