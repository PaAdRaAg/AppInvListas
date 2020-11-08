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
                return aux.codigo;
            };
            anterior = aux;
            aux = aux.siguiente;
        };
        return null;
    };

    buscar(cod){
        let aux = this.inicio;
        let anterior = null;

        while(aux != null){
            if(aux.codigo === cod){
                if(!anterior){
                    this.inicio = aux.siguiente;
                } else{
                    anterior.siguiente = aux.siguiente;
                };
                return aux;
            };
        };
    };
};

const nInventario = new Inventario();

nInventario.agregar(1, 1, 1, 1, 1)
nInventario.agregar(2, 2, 2, 2, 2)
nInventario.agregar(3, 3, 3, 3, 3)

console.log(nInventario);

//nInventario.eliminar(2);

//console.log(nInventario);

//nInventario.buscar(3);

//console.log(nInventario);
