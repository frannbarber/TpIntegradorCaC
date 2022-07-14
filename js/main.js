function resumen() {
    var cantidad = +document.getElementById("txtCantidad").value;
    var categoria = +document.getElementById("txtCategoria").value;
    cantidad = valEntero(cantidad);
    
    document.getElementById("txtTotal").value = cantidad * categoria;
    
  }
  
  function limpiar() {
    document.getElementById("txtTotal").value = ""
  }
  
  function valEntero(cant) {
    cantidad=parseInt(cant)
    if (isNaN(cant)) {
      return "";
    } else {
      return cantidad;
    }
  }

if (document.getElementById("app")){
    const app=new Vue({
        el:"#app",
        data(){
            return{
            usuarios:[],
            errored:false,
            loading:true,
            }
        },
        created(){
            var url="http://localhost:8080/usuarios"
            this.fetchData(url);
        },
        methods:{
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.usuarios = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(usuario) {
                const url = 'http://localhost:8080/usuarios/' + usuario;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })
}
function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let e = document.getElementById("txtEmail").value
    let c = document.getElementById("txtCantidad").value
    let t = document.getElementById("txtTotal").value
 
    let usuario = {
        nombre: n,  
        apellido: a,
        email: e,
        cantidad: c,
        total: t
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
            console.error(err);
        })
}