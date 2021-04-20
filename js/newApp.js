let precioTotal = 0;

class Producto{
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    agregarPrecio (){
        precioTotal = precioTotal + this.precio;
    }
}

const panBlanco = new Producto("blanco", 50);
const panIntegral = new Producto("integral", 80);
const carne = new Producto("carne", 150);
const pollo = new Producto("pollo", 120);
const pescado = new Producto("pescado", 200);
const queso = new Producto("queso", 50);
const lechuga = new Producto("lechuga", 15);
const tomate = new Producto("tomate", 25);
const zanahoria = new Producto("zanahoria", 15);
const cebolla = new Producto("cebolla", 10);
const pepinillos = new Producto("pepinillos", 20);
const arrayIngredientes = [];


/* alert("¡Bienvenido a CHAMBUCHITO.COM!\nEn breve le armamos su Sandwich");
let pan = prompt("¿Que tipo de pan desea para su Chambuchito? \n(Blanco [$50] / Integral [$80])");
pan = pan.toLowerCase(); */
document.getElementById("inputPan").addEventListener("change", agregarPan);

function agregarPan(){
    let pan = document.getElementById("inputPan").value;
    switch(pan){
        case "blanco": 
            panBlanco.agregarPrecio();
            arrayIngredientes.push("-Pan Blanco ($" + panBlanco.precio + ")")
            document.getElementById("imgPan").src="./img/panBlanco1.png"
            break;
        case "integral":
            panIntegral.agregarPrecio();
            arrayIngredientes.push("-Pan Integral ($" + panIntegral.precio + ")")
            break;
        default:
            panBlanco.agregarPrecio();
            arrayIngredientes.push("-Pan Blanco ($" + panBlanco.precio + ")")
            break;
    }
}
/* let proteina = prompt("¿Que Proteína desea? \n(Carne [$150] / Pollo [$120] / Pescado [$200])");
proteina = proteina.toLowerCase(); */

document.getElementById("inputProteina").addEventListener("change", agregarProteina);

function agregarProteina(){
    let proteina = document.getElementById("inputProteina").value;
    switch(proteina){
        case "carne": 
            carne.agregarPrecio();
            arrayIngredientes.push("-Carne ($" + carne.precio + ")")
            document.getElementById("imgProteina").src="./img/carne.png"
            break;
        case "pollo":
            pollo.agregarPrecio();
            arrayIngredientes.push("-Pollo ($" + pollo.precio + ")")
            document.getElementById("imgProteina").src="./img/pollo.png"
            break;
        case "pescado":
            pescado.agregarPrecio();
            arrayIngredientes.push("-Pescado ($" + pescado.precio + ")")
            document.getElementById("imgProteina").src="./img/pescado.png"
            break;
        default:
            carne.agregarPrecio();
            arrayIngredientes.push("-Carne ($" + carne.precio + ")")
            break;
    }
}

/* let vegetales = prompt("¿Que vegetales desea agregarle? \n(Lechuga [$15] / Tomate [$25] / Zanahoria [$15] / Cebolla [$10] / Pepinillos [$20] / No)");
vegetales = vegetales.toLowerCase(); */
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

document.getElementById("botonFinalizar").addEventListener("click", finalizarCompra);

function finalizarCompra(){
        let agregaPanFinal = document.createElement("img");
        agregaPanFinal.src="./img/panBlanco2.png";
        agregaPanFinal.setAttribute("style", `z-index: ${zIndex++}; position: absolute; bottom: ${cssTopVegetales+60}px; left: 220px`);
        contenedorVegetales.appendChild(agregaPanFinal)
}


/* let deseaQueso = prompt("¿Desea agregarle Queso Cheddar al Sandwich por tan solo $50 más?\n\n(Si / No)");
deseaQueso = deseaQueso.toLowerCase();

alert("¡Listo! Tu pedido ya se está Prepando...");

if (deseaQueso == "si") {
    queso.agregarPrecio();
    arrayIngredientes.push("-Queso ($" + queso.precio + ")")
    alert("Detalle del Pedido:\n" + arrayIngredientes.join("\n"));
    alert("¡LISTO! Gracias por comprar en CHAMBUCHITO.COM\n\nTotal a abonar: $ " + precioTotal + "\n¡Esperamos que disfrutes tu CHAMBUCHITO de " + proteina + " en pan " + pan + " con Queso!\n\n¡VUELVA PRONTO!");
} 
else{
    alert("¡LISTO! Gracias por comprar en CHAMBUCHITO.COM\n\nTotal a abonar: $ " + precioTotal + "\n¡Esperamos que disfrutes tu CHAMBUCHITO de " + proteina + " en pan " + pan + "!\n\n¡VUELVA PRONTO!");
} */