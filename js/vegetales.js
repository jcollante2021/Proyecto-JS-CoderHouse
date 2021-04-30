const arrayVegetales = [];

$("#botonAgregarVegetales").click(agregarVegetales);
let cssTopVegetales = 70
let zIndex = 2

function agregarVegetales(){
    vegetales = $("#inputVegetales").val();
    if (arrayVegetales.length < 3){
        switch(vegetales){
            case "lechuga": 
                lechuga.agregarPrecio();
                arrayIngredientes.push("Lechuga ($" + lechuga.precio + ")");
                $("#cajaImgSandwich").prepend(`<img id="imgLechuga" src="./img/lechuga.png">`);
                $("#imgLechuga").css("z-index", `${calcular_Z_Index()}`)
                $("#imgLechuga").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button class="btn btn-warning mx-1">Lechuga</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "tomate":
                tomate.agregarPrecio();
                arrayIngredientes.push("Tomate ($" + tomate.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgTomate" src="./img/tomate.png">`);
                $("#imgTomate").css("z-index", `${calcular_Z_Index()}`)
                $("#imgTomate").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button class="btn btn-warning mx-1">Tomate</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "zanahoria":
                zanahoria.agregarPrecio();
                arrayIngredientes.push("Zanahoria ($" + zanahoria.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgZanahoria" src="./img/zanahoria.png">`);
                $("#imgZanahoria").css("z-index", `${calcular_Z_Index()}`)
                $("#imgZanahoria").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button class="btn btn-warning mx-1">Zanahoria</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "cebolla":
                cebolla.agregarPrecio();
                arrayIngredientes.push("Cebolla ($" + cebolla.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgCebolla" src="./img/cebolla.png">`);
                $("#imgCebolla").css("z-index", `${calcular_Z_Index()}`)
                $("#imgCebolla").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button class="btn btn-warning mx-1">Cebolla</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "pepinillos":
                pepinillos.agregarPrecio();
                arrayIngredientes.push("Pepinillos ($" + pepinillos.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgPepinillos" src="./img/pepinillos.png">`);
                $("#imgPepinillos").css("z-index", `${calcular_Z_Index()}`)
                $("#imgPepinillos").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button class="btn btn-warning mx-1">Pepinillos</button>`);
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

function calcular_Z_Index(){
    zIndex = (zIndex + 1);
    return zIndex
}

function calcular_bottom_css(){
    cssTopVegetales = (cssTopVegetales + 15);
    return cssTopVegetales
}