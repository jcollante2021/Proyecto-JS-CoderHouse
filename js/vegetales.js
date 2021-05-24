//Se creó este Array vacio para hacer que los vegetales no supéren la cantidad de 3 por Pedido//
arrayVegetales = [];

$("#botonAgregarVegetales").click(agregarVegetales);
//Declaro el valor que inicial que quiero que tengan los elemetos en el CSS
cssTopVegetales = 70
zIndex = 2

function agregarVegetales(){
    vegetales = $("#inputVegetales").val();
    //Toma el Valor del Input y segun el tipo de Vegetal muestra el IMG y lo agrega al ARRAY de Ingredientes//
    if (arrayVegetales.length < 3){
        switch(vegetales){
            //cada CASE pushea la informacion a los ARRAYs y crea la IMG en el DOM//
            case "Lechuga": 
                arrayParaFacturarVegetales.push(lechuga)
                arrayIngredientes.push("Lechuga ($" + lechuga.precio + ")");
                $("#cajaImgSandwich").prepend(`<img id="imgLechuga" src="./img/lechuga.png">`);
                $("#imgLechuga").css("z-index", `${calcular_Z_Index()}`)
                $("#imgLechuga").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarLechuga" class="btn btn-warning mx-1 eliminarVegetal" value="Lechuga">Lechuga</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "Tomate":
                arrayParaFacturarVegetales.push(tomate)
                arrayIngredientes.push("Tomate ($" + tomate.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgTomate" src="./img/tomate.png">`);
                $("#imgTomate").css("z-index", `${calcular_Z_Index()}`)
                $("#imgTomate").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarTomate" class="btn btn-warning mx-1 eliminarVegetal" value="Tomate">Tomate</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "Zanahoria":
                arrayParaFacturarVegetales.push(zanahoria)
                arrayIngredientes.push("Zanahoria ($" + zanahoria.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgZanahoria" src="./img/zanahoria.png">`);
                $("#imgZanahoria").css("z-index", `${calcular_Z_Index()}`)
                $("#imgZanahoria").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarZanahoria" class="btn btn-warning mx-1 eliminarVegetal" value="Zanahoria">Zanahoria</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "Cebolla":
                arrayParaFacturarVegetales.push(cebolla)
                arrayIngredientes.push("Cebolla ($" + cebolla.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgCebolla" src="./img/cebolla.png">`);
                $("#imgCebolla").css("z-index", `${calcular_Z_Index()}`)
                $("#imgCebolla").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarCebolla" class="btn btn-warning mx-1 eliminarVegetal" value="Cebolla">Cebolla</button>`);
                arrayVegetales.push(vegetales)
                break;
            case "Pepinillos":
                arrayParaFacturarVegetales.push(pepinillos)
                arrayIngredientes.push("Pepinillos ($" + pepinillos.precio + ")")
                $("#cajaImgSandwich").prepend(`<img id="imgPepinillos" src="./img/pepinillos.png">`);
                $("#imgPepinillos").css("z-index", `${calcular_Z_Index()}`)
                $("#imgPepinillos").css("bottom" , `${calcular_bottom_css()}px`)
                $("#divVegetalesSeleccionados").append(`<button id="eliminarPepinillos" class="btn btn-warning mx-1 eliminarVegetal" value="Pepinillos">Pepinillos</button>`);
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
    $("#divVegetalesSeleccionados").on('click', '.eliminarVegetal', function(e){
        var vegetalSeleccionado = this; 
        eliminarVegetalSeleccionado(e, vegetalSeleccionado)
    })
    //Esta funcion luego de ser llamada por el evento del boton creado, removera el vegetal de todos los ARRAYs y el IMG del DOM que corresponda//
    function eliminarVegetalSeleccionado(e, seleccionado) {
        e.preventDefault();
        valor = seleccionado.textContent
        valorParaFacturacion = seleccionado.textContent.toLowerCase()
        seleccionado.remove();
        $(`#img${valor}`).remove();
        eliminarIngredientesDelArray(arrayParaFacturarVegetales, eval(valorParaFacturacion))
        eliminarIngredientesDelArray(arrayVegetales, valor)
        eliminarIngredientesDelArray(arrayIngredientes, valor + " ($" + eval(valorParaFacturacion).precio +")" )
    }

    
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
    if (arrayParaFacturarQueso.length != 0){
        alert("SOLO PUEDE SELECCIONAR QUESO UNA VEZ")
    }
    else{
        arrayParaFacturarQueso.push(queso)
        arrayIngredientes.push("Queso cheddar ($" + queso.precio + ")")
        $("#cajaImgSandwich").prepend(`<img id="imgQueso" src="./img/queso.png">`);
        $("#imgQueso").css("z-index", `${calcular_Z_Index()}`)
        $("#imgQueso").css("bottom" , `${calcular_bottom_css()}px`)
    }
    
}

//Funciones para obetener el Z-index y la altura del Bottom para las IMG//

function calcular_Z_Index(){
    zIndex = (zIndex + 1);
    return zIndex
}

function calcular_bottom_css(){
    cssTopVegetales = (cssTopVegetales + 10);
    return cssTopVegetales
}