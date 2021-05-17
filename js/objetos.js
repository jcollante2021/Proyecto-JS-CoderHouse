precioTotal = 0;

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
arrayIngredientes = [];
arrayParaFacturar = [];
arrayParaFacturarPan = [];
arrayParaFacturarProteina = [];
arrayParaFacturarVegetales = [];
arrayParaFacturarQueso = [];





