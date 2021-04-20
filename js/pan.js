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