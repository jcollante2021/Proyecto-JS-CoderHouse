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

alert("¡Bienvenido a CHAMBUCHITO.COM!\nEn breve le armamos su Sandwich");
let pan = prompt("¿Que tipo de pan desea para su Chambuchito? \n(Blanco [$50] / Integral [$80])");
pan = pan.toLowerCase();

switch(pan){
    case "blanco": 
        panBlanco.agregarPrecio();
        arrayIngredientes.push("-Pan Blanco ($" + panBlanco.precio + ")")
        break;
    case "integral":
        panIntegral.agregarPrecio();
        arrayIngredientes.push("-Pan Integral ($" + panIntegral.precio + ")")
        break;
    default:
        alert("Usted no a ingresado correctamente el Pedido, por defecto se le agregará pan BLANCO a su Pedido ");
        panBlanco.agregarPrecio();
        arrayIngredientes.push("-Pan Blanco ($" + panBlanco.precio + ")")
        break;
}
let proteina = prompt("¿Que Proteína desea? \n(Carne [$150] / Pollo [$120] / Pescado [$200])");
proteina = proteina.toLowerCase();

switch(proteina){
    case "carne": 
        carne.agregarPrecio();
        arrayIngredientes.push("-Carne ($" + carne.precio + ")")
        break;
    case "pollo":
        pollo.agregarPrecio();
        arrayIngredientes.push("-Pollo ($" + pollo.precio + ")")
        break;
    case "pescado":
        pescado.agregarPrecio();
        arrayIngredientes.push("-Pescado ($" + pescado.precio + ")")
        break;
    default:
        alert("Usted no ha ingresado correctamente el Pedido, por defecto se le agregará CARNE como proteina a su Pedido");
        carne.agregarPrecio();
        arrayIngredientes.push("-Carne ($" + carne.precio + ")")
        break;
}

let vegetales = prompt("¿Que vegetales desea agregarle? \n(Lechuga [$15] / Tomate [$25] / Zanahoria [$15] / Cebolla [$10] / Pepinillos [$20] / No)");
vegetales = vegetales.toLowerCase();

while (vegetales != "no"){
    switch(vegetales){
        case "lechuga": 
            lechuga.agregarPrecio();
            alert("Se agregó " + vegetales + " a tu CHAMBUCHITO")
            arrayIngredientes.push("-Lechuga ($" + lechuga.precio + ")")
            break;
        case "tomate":
            tomate.agregarPrecio();
            alert("Se agregó " + vegetales + " a tu CHAMBUCHITO")
            arrayIngredientes.push("-Tomate ($" + tomate.precio + ")")
            break;
        case "zanahoria":
            zanahoria.agregarPrecio();
            alert("Se agregó " + vegetales + " a tu CHAMBUCHITO")
            arrayIngredientes.push("-Zanahoria ($" + zanahoria.precio + ")")
            break;
        case "cebolla":
            cebolla.agregarPrecio();
            alert("Se agregó " + vegetales + " a tu CHAMBUCHITO")
            arrayIngredientes.push("-Cebolla ($" + cebolla.precio + ")")
            break;
        case "pepinillos":
            pepinillos.agregarPrecio();
            alert("Se agregó " + vegetales + " a tu CHAMBUCHITO")
            arrayIngredientes.push("-Pepinillos ($" + pepinillos.precio + ")")
            break;
        default:
            alert("No ha ingresado una opción correcta, vuelva a intentarlo")
            break
    }

    vegetales = prompt("¿Desea Agregar algun Vegetal más?\n(Lechuga / Tomate / Zanahoria / Cebolla / Pepinillos / No)");
}

let deseaQueso = prompt("¿Desea agregarle Queso Cheddar al Sandwich por tan solo $50 más?\n\n(Si / No)");
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
}



