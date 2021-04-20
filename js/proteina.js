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