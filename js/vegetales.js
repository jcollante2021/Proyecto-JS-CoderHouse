arrayVegetales = [];

$("#botonAgregarVegetales").click(agregarVegetales);
cssTopVegetales = 70
zIndex = 2

function agregarVegetales(){
    vegetales = $("#inputVegetales").val();
    //Toma el Valor del Input y segun el tipo de Vegetal muestra el IMG y lo agrega al ARRAY de Ingredientes//
    if (arrayVegetales.length < 3){
        switch(vegetales){
            case "lechuga": 
                lechuga.agregarPrecio();
                arrayIngredientes.push("Lechuga ($" + lechuga.precio + ")");
                $("#cajaImgSandwich").prepend(`<img id="imgLechuga" src="./img/lechuga.png">`);
                $("#imgLechuga").css("z-index", `${calcular_Z_Index()}`)
                $("#imgLechuga").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarLechuga" class="btn btn-warning mx-1 eliminarVegetal">Lechuga</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "tomate":
                tomate.agregarPrecio();
                arrayIngredientes.push("Tomate ($" + tomate.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgTomate" src="./img/tomate.png">`);
                $("#imgTomate").css("z-index", `${calcular_Z_Index()}`)
                $("#imgTomate").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarTomate" class="btn btn-warning mx-1 eliminarVegetal">Tomate</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "zanahoria":
                zanahoria.agregarPrecio();
                arrayIngredientes.push("Zanahoria ($" + zanahoria.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgZanahoria" src="./img/zanahoria.png">`);
                $("#imgZanahoria").css("z-index", `${calcular_Z_Index()}`)
                $("#imgZanahoria").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarZanahoria" class="btn btn-warning mx-1 eliminarVegetal">Zanahoria</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "cebolla":
                cebolla.agregarPrecio();
                arrayIngredientes.push("Cebolla ($" + cebolla.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgCebolla" src="./img/cebolla.png">`);
                $("#imgCebolla").css("z-index", `${calcular_Z_Index()}`)
                $("#imgCebolla").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarCebolla" class="btn btn-warning mx-1 eliminarVegetal">Cebolla</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "pepinillos":
                pepinillos.agregarPrecio();
                arrayIngredientes.push("Pepinillos ($" + pepinillos.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgPepinillos" src="./img/pepinillos.png">`);
                $("#imgPepinillos").css("z-index", `${calcular_Z_Index()}`)
                $("#imgPepinillos").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarPepinillos" class="btn btn-warning mx-1 eliminarVegetal">Pepinillos</button>`);
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
  //creo evento al clickear el boton creado para elimnar el vegetal en el ARRAY y en el IMG//
    $("#eliminarLechuga").click( (e) => {
        e.preventDefault();
        $("#eliminarLechuga").remove()
        $("#imgLechuga").remove()
        eliminarIngredientesDelArray(arrayVegetales, 'lechuga')
        eliminarIngredientesDelArray(arrayIngredientes, "Lechuga ($" + lechuga.precio + ")" )
    })

    
    $("#eliminarTomate").click( (e) => {
        e.preventDefault();
        $("#eliminarTomate").remove()
        $("#imgTomate").remove()
        eliminarIngredientesDelArray(arrayVegetales, 'tomate')
        eliminarIngredientesDelArray(arrayIngredientes, "Tomate ($" + tomate.precio + ")")
    })
    
    $("#eliminarZanahoria").click( (e) => {
        e.preventDefault();
        $("#eliminarZanahoria").remove()
        $("#imgZanahoria").remove()
        eliminarIngredientesDelArray(arrayVegetales, 'zanahoria')
        eliminarIngredientesDelArray(arrayIngredientes, "Zanahoria ($" + zanahoria.precio + ")" )
    })
    
    $("#eliminarCebolla").click( (e) => {
        e.preventDefault();
        $("#eliminarCebolla").remove()
        $("#imgCebolla").remove()
        eliminarIngredientesDelArray(arrayVegetales, 'cebolla')
        eliminarIngredientesDelArray(arrayIngredientes, "Cebolla ($" + cebolla.precio + ")" )
        
    })
    
    $("#eliminarPepinillos").click( (e) => {
        e.preventDefault();
        $("#eliminarPepinillos").remove()
        $("#imgPepinillos").remove()
        eliminarIngredientesDelArray(arrayVegetales, 'pepinillos')
        eliminarIngredientesDelArray(arrayIngredientes, "Pepinillos ($" + pepinillos.precio + ")")
    })
    
    //Funcion para buscar en el Array de Vegetales y eliminarlo del ARRAY//
    function eliminarIngredientesDelArray( arr , item){
        var i = arr.indexOf(item)
        if ( i !== -1) {
            arr.splice( i , 1 )
        }
    }
}

//Toma el evento del boton del Queso, muestra el IMG y lo agrega al ARRAY de Ingredientes//

$("#btnAgregarQueso").click(agregarQueso);

function agregarQueso(){
    queso.agregarPrecio();
    arrayIngredientes.push("Queso cheddar ($" + queso.precio + ")")
    $("#cajaImgSandwich").prepend(`<img id="imgQueso" src="./img/queso.png">`);
    $("#imgQueso").css("z-index", `${calcular_Z_Index()}`)
    $("#imgQueso").css("bottom" , `${calcular_bottom_css()}px`)
}

//Funciones para obetener el Zindex y la altura del Bottom para las IMG//

function calcular_Z_Index(){
    zIndex = (zIndex + 1);
    return zIndex
}

function calcular_bottom_css(){
    cssTopVegetales = (cssTopVegetales + 10);
    return cssTopVegetales
}