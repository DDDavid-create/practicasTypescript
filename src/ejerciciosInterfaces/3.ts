//*Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product y funciones para agregar y buscar productos.

//Creamos el interface Product

interface Product {
    name: string,
    price: number,
    stock: number
}

//Creamos el interface Inventory
interface Inventory{
    productos: Product[],
    addProducto: (producto: Product) => void,
    encontrarProdPorNombre: (nombre: string) => Product | null,
}

//Creamos funciones para añadir y buscar productos por el nombre
const inventario: Inventory = {
    productos: [],
    addProducto: function (producto: Product): void{
        this.productos.push(producto),
        console.log(`El producto: '${producto.name}' ha sido añadido correctamente`)
    },
    encontrarProdPorNombre: function(nombre: string): Product | null{
        const productoBuscado = this.productos.find(producto => producto.name.toLowerCase() === nombre.toLowerCase()) || null
        if(productoBuscado){
            console.log(`Producto '${nombre}' encontrado:
            Nombre: ${productoBuscado.name}
            Precio: ${productoBuscado.price}
            Cant Stock: ${productoBuscado.stock}
            `)
        }else{
            console.log(`Producto '${nombre}' ingresado no encontrado`)
        }
        return productoBuscado
    }
}

//Cramos productos
const prod1: Product = {
    name: "PC Gamer",
    price: 200000,
    stock: 19
}
const prod2: Product = {
    name: "Tablet Mucho",
    price: 199000,
    stock: 5
}

//Agregamos los productos
inventario.addProducto(prod1)
inventario.addProducto(prod2)

//Buscamos los productos por su nombre
inventario.encontrarProdPorNombre("pc gamer")
inventario.encontrarProdPorNombre("moto")
inventario.encontrarProdPorNombre("tablet Mucho")