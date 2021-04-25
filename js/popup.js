window.onload = verificar()

function verificar(){
    let usuario = sessionStorage.getItem("user")
    objeto = JSON.parse(usuario)
    if (objeto == null){
        overley = document.getElementById("overlay");
        overley.classList.add("activo");
        document.getElementById("botonConfirmar").addEventListener("click", agregarNombre)
        function agregarNombre(){
            inputNombre = document.getElementById("inputNombre").value;
            document.getElementById("nombrePersonlizado").innerHTML += `${inputNombre}`
            objeto = inputNombre
            overley.classList.remove("activo")
            myJSON = JSON.stringify(objeto)
            sessionStorage.setItem("user", myJSON)
        }   
    }
    else{
        document.getElementById("nombrePersonlizado").innerHTML += `${objeto}`
    }
}