$("#inputPan").change(agregarPan)

function agregarPan(){
    pan = $("#inputPan").val();
    //Toma el Valor del Input y segun el tipo de pan muestra el IMG y lo agrega al ARRAY de Ingredientes//
    switch(pan){
        case "blanco": 
            arrayParaFacturarPan = []
            arrayParaFacturarPan.push( panBlanco );
            arrayIngredientes.push("Pan Blanco ($" + panBlanco.precio + ")")
            $("#cajaImgSandwich").prepend(`<img id="imgPan" src="./img/panBlanco1.png">`);
            break;
        case "integral":
            arrayParaFacturarPan = []
            arrayParaFacturarPan.push( panIntegral );
            arrayIngredientes.push("Pan Integral ($" + panIntegral.precio + ")")
            break;
        default:
            arrayParaFacturarPan = []
            arrayParaFacturarPan.push( panBlanco );
            arrayIngredientes.push("Pan Blanco ($" + panBlanco.precio + ")")
            $("#cajaImgSandwich").prepend(`<img id="imgPan" src="./img/panBlanco1.png">`);
            break;
    }
}