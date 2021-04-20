const arrayVegetales = [];

document.getElementById("botonAgregarVegetales").addEventListener("click", agregarVegetales);
let contenedorVegetales = document.getElementById("cajaImgSandwich")
let cssTopVegetales = 70
let zIndex = 2

function agregarVegetales(){
    let vegetales = document.getElementById("inputVegetales").value;
    if (arrayVegetales.length < 3){
        switch(vegetales){
            case "lechuga": 
                lechuga.agregarPrecio();
                arrayIngredientes.push("-Lechuga ($" + lechuga.precio + ")");
                let agregaLechuga = document.createElement("img");
                agregaLechuga.src="./img/lechuga.png";
                agregaLechuga.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+20}px; left: 220px`);
                contenedorVegetales.appendChild(agregaLechuga);
                document.getElementById("divVegetalesSeleccionados").innerHTML += `<button class="btn btn-warning mx-1">Lechuga</button>`;
                arrayVegetales.push(vegetales)
                break;
            case "tomate":
                tomate.agregarPrecio();
                arrayIngredientes.push("-Tomate ($" + tomate.precio + ")")
                let agregaTomate = document.createElement("img");
                agregaTomate.src="./img/tomate.png";
                agregaTomate.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+20}px; left: 220px`);
                contenedorVegetales.appendChild(agregaTomate);
                document.getElementById("divVegetalesSeleccionados").innerHTML += `<button class="btn btn-warning mx-1">Tomate</button>`;
                arrayVegetales.push(vegetales)
                break;
            case "zanahoria":
                zanahoria.agregarPrecio();
                arrayIngredientes.push("-Zanahoria ($" + zanahoria.precio + ")")
                let agregaZanahoria = document.createElement("img");
                agregaZanahoria.src="./img/zanahoria.png";
                agregaZanahoria.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+20}px; left: 220px`);
                contenedorVegetales.appendChild(agregaZanahoria);
                document.getElementById("divVegetalesSeleccionados").innerHTML += `<button class="btn btn-warning mx-1">Zanahoria</button>`;
                arrayVegetales.push(vegetales)
                break;
            case "cebolla":
                cebolla.agregarPrecio();
                arrayIngredientes.push("-Cebolla ($" + cebolla.precio + ")")
                let agregaCebolla = document.createElement("img");
                agregaCebolla.src="./img/cebolla.png";
                agregaCebolla.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+20}px; left: 220px`);
                contenedorVegetales.appendChild(agregaCebolla);
                document.getElementById("divVegetalesSeleccionados").innerHTML += `<button class="btn btn-warning mx-1">Cebolla</button>`;
                arrayVegetales.push(vegetales)
                break;
            case "pepinillos":
                pepinillos.agregarPrecio();
                arrayIngredientes.push("-Pepinillos ($" + pepinillos.precio + ")")
                let agregaPepinillos = document.createElement("img");
                agregaPepinillos.src="./img/pepinillos.png";
                agregaPepinillos.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+20}px; left: 220px`);
                contenedorVegetales.appendChild(agregaPepinillos);
                document.getElementById("divVegetalesSeleccionados").innerHTML += `<button class="btn btn-warning mx-1">Pepinillos</button>`;
                arrayVegetales.push(vegetales)
                break;
            default:
                alert("No ha ingresado una opción correcta, vuelva a intentarlo")
                break
        }
    }
    else {
        alert("USTED YA HA SELECCIONADO 3 VEGETALES")
    }
    
}