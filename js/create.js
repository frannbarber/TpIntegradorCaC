function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let e = document.getElementById("txtEmail").value
    let c = document.getElementById("txtCantidad").value
    let g = document.getElementById("txtCategoria").value
 
    let usuario = {
        nombre: n,
        apellido: a,
        email: e,
        cantidad: c,
        categoria: g
    }        
    let url = "http://localhost:8080/usuarios"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
