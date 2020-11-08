var cantidad = document.querySelector("#cantPA")
var codigo = document.querySelector("#codPA")
var nombre = document.querySelector("#nomPA")
var costo = document.querySelector("#costPA")
var descripcion = document.querySelector("#descPA")
var btnAg = document.querySelector("#agregarBtn")
var tabla1 = document.querySelector("#tabla1")
var tabla2 = document.querySelector("#tabla2")
var tabla3 = document.querySelector("#tabla3")
var tabla4 = document.querySelector("#tabla4")
var codigoEl = document.querySelector("#codPE")
var btnEl = document.querySelector("#btnPE")
var codBu = document.querySelector("#codPB")
var btnBu = document.querySelector("#btnPB")
var btnListar = document.querySelector("#btnListar")
var btnListarInv = document.querySelector("#btnListarInv")
var btnAgPos = document.querySelector("#btnAgPos")

class Producto{
    constructor(cantidad, codigo, nombre, costo, descripcion){
        this.cantidad = cantidad;
        this.codigo = codigo;
        this.nombre = nombre;
        this.costo = costo;
        this.descripcion = descripcion;
        this.siguiente = null;
    };
};

class Inventario{
    constructor(){
        this.inicio = null;
        this.producto = new Producto();
        this.tamaño = 0;

    };

    agregar(cantidad, codigo, nombre, costo, descripcion){
        const nProducto = new Producto(cantidad, codigo, nombre, costo, descripcion, null);
        if(this.inicio == null){
            this.inicio = nProducto
        } else{
            let aux = this.inicio;
            while(aux.siguiente){
                aux = aux.siguiente;
            };
            aux.siguiente = nProducto;
        };
        this.tamaño++;
    };

    eliminar(codigo){
        let aux = this.inicio;
        let anterior = null;

        while(aux != null){
            if(aux.codigo === codigo){
                if(!anterior){
                    this.inicio = aux.siguiente;
                } else{
                    anterior.siguiente = aux.siguiente;
                };
                this.tamaño--;
                return aux.codigo;
            };
            anterior = aux;
            aux = aux.siguiente;
        };
        return null;
    };

    buscar(codigo){
        if(this.inicio == null){
            return null;
        };
        let aux = this.inicio;
        while(aux){
            if(aux.codigo == codigo){
                return aux;
            };
            aux = aux.siguiente;
        };
        return null;
    };

    insertar(producto, inicio){
        if(inicio < 0 || inicio > this.tamaño){
            return null;
        };

        const nProducto = new Node(producto);
        let aux = this.inicio;
        let anterior;

        if(inicio === 0){
            nProducto.siguiente = aux;
            this.inicio = nProducto;
        } else {
            for(let i = 0; i < inicio; i++){
                anterior = aux;
                aux = aux.siguiente;
            };

            nProducto.siguiente = aux;
            anterior.siguiente = nProducto;
        };
        this.tamaño++;
    };

    agregarIn(codigo, producto, cantidad, precio, descripcion){
        const nProducto = new Producto(codigo, producto, cantidad, precio, descripcion);
        let aux = this.inicio;
        nProducto.siguiente = aux;
        this.inicio = nProducto;
    };

    eliminarIn(){
        let aux = this.inicio;
        this.inicio = this.inicio.siguiente;
        aux.siguiente = null;
    };
};