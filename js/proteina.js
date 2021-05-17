$("#inputProteina").change(agregarProteina);
proteina = "Vegetales";

function agregarProteina(){
    proteina = $("#inputProteina").val();
    //Toma el Valor del Input y segun el tipo de Proteina muestra el IMG y lo agrega al ARRAY de Ingredientes//
    switch(proteina){
        case "carne": 
            arrayParaFacturarProteina = [];
            arrayParaFacturarProteina.push(carne)
            eliminarIngredientesDelArray(arrayIngredientes, "Pollo ($" + pollo.precio + ")" )
            eliminarIngredientesDelArray(arrayIngredientes, "Pescado ($" + pescado.precio + ")" )
            arrayIngredientes.push("Carne ($" + carne.precio + ")");
            $("#imgProteina").attr("src", "");
            $("#cajaImgSandwich").prepend(`<img id="imgProteina" src="./img/carne.png">`);
            break;
        case "pollo":
            arrayParaFacturarProteina = [];
            arrayParaFacturarProteina.push(pollo)
            eliminarIngredientesDelArray(arrayIngredientes, "Carne ($" + carne.precio + ")" )
            eliminarIngredientesDelArray(arrayIngredientes, "Pescado ($" + pescado.precio + ")" )
            arrayIngredientes.push("Pollo ($" + pollo.precio + ")");
            $("#imgProteina").attr("src", "");
            $("#cajaImgSandwich").prepend(`<img id="imgProteina" src="./img/pollo.png">`);
            break;
        case "pescado":
            arrayParaFacturarProteina = [];
            arrayParaFacturarProteina.push(pescado)
            eliminarIngredientesDelArray(arrayIngredientes, "Carne ($" + carne.precio + ")" )
            eliminarIngredientesDelArray(arrayIngredientes, "Pollo ($" + pollo.precio + ")" )
            arrayIngredientes.push("Pescado ($" + pescado.precio + ")");
            $("#imgProteina").attr("src", "");
            $("#cajaImgSandwich").prepend(`<img id="imgProteina" src="./img/pescado.png">`);
            break;
        default:
            arrayParaFacturarProteina = [];
            arrayParaFacturarProteina.push(carne)
            eliminarIngredientesDelArray(arrayIngredientes, "Pollo ($" + pollo.precio + ")" )
            eliminarIngredientesDelArray(arrayIngredientes, "Pescado ($" + pescado.precio + ")" )
            arrayIngredientes.push("Carne ($" + carne.precio + ")");
            $("#imgProteina").attr("src", "");
            $("#cajaImgSandwich").prepend(`<img id="imgProteina" src="./img/carne.png">`);
            $("#imgProteina").attr("src", "./img/carne.png");
            break;
    }

    function eliminarIngredientesDelArray( arr , item){
        var i = arr.indexOf(item)
        if ( i !== -1) {
            arr.splice( i , 1 )
        }
    }
    
}