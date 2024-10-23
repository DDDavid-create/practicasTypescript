//* El programa agrega productos, busca productos por nombre y calcula el valor total del inventario.

interface Producto {
    nombre: string,
    descripcion: string,
    stock: number,
    valor: number
}

let productos: Producto[] = []

function agregarProducto(producto: Producto){
    productos.push(producto)
}

function buscarProductoPorNombre(nombre: string): Producto | null{
    return productos.find(producto => producto.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null
}

function calcularTotalInventario(): number{
    if (productos.length === 0) return 0

    const totalInventario = productos.reduce((total, producto) => total + producto.valor, 0)
    return totalInventario
}

agregarProducto({nombre: "Tomate", descripcion: "Tomates chontos", stock: 100, valor: 1000})
agregarProducto({nombre: "Cebolla", descripcion: "Cebollas cabezonas", stock: 40, valor: 1200})
agregarProducto({nombre: "Papa", descripcion: "Papas arrechas", stock: 100, valor: 1300})

const productoBuscado = buscarProductoPorNombre("papa")
console.log(`Estás buscando: ${productoBuscado?.nombre}`)
if (productoBuscado){
    console.log(`¡Producto encontrado!:
        - Nombre: ${productoBuscado.nombre}
        - Descripcion: ${productoBuscado.descripcion}
        - Stock: ${productoBuscado.stock}
        - Valor Unidad: ${productoBuscado.valor}`
    )
}else{
    console.log("Producto no encontrado. Intente con otro")
}

const totalInventario = calcularTotalInventario();
console.log(`\nEl total del inventario es: $${totalInventario.toFixed(2)}`);