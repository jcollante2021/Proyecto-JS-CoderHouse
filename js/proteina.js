$("#inputProteina").change(agregarProteina);
proteina = "Vegetales";

function agregarProteina(){
    proteina = $("#inputProteina").val();
    switch(proteina){
        case "carne": 
            carne.agregarPrecio();
            arrayIngredientes.push("Carne ($" + carne.precio + ")");
            $("#imgProteina").attr("src", "./img/carne.png");
            break;
        case "pollo":
            pollo.agregarPrecio();
            arrayIngredientes.push("Pollo ($" + pollo.precio + ")");
            $("#imgProteina").attr("src", "./img/pollo.png");
            break;
        case "pescado":
            pescado.agregarPrecio();
            arrayIngredientes.push("Pescado ($" + pescado.precio + ")");
            $("#imgProteina").attr("src", "./img/pescado.png");
            break;
        default:
            carne.agregarPrecio();
            arrayIngredientes.push("Carne ($" + carne.precio + ")");
            $("#imgProteina").attr("src", "./img/carne.png");
            break;
    }
}