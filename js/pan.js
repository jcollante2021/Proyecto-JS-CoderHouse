$("#inputPan").change(agregarPan)

function agregarPan(){
    pan = $("#inputPan").val();
    switch(pan){
        case "blanco": 
            panBlanco.agregarPrecio();
            arrayIngredientes.push("Pan Blanco ($" + panBlanco.precio + ")")
            $('#imgPan').attr("src", "./img/panBlanco1.png");
            break;
        case "integral":
            panIntegral.agregarPrecio();
            arrayIngredientes.push("Pan Integral ($" + panIntegral.precio + ")")
            break;
        default:
            panBlanco.agregarPrecio();
            arrayIngredientes.push("Pan Blanco ($" + panBlanco.precio + ")")
            $('#imgPan').attr("src", "./img/panBlanco1.png");
            break;
    }
}