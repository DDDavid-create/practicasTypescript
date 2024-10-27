//*Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de BaseObject. Crea una función genérica que pueda imprimir los datos.

//Creamos una interface BaseObject
interface BaseObject{
    id: number
}

//Creamos las interfaces User, Product y Order que heredan de BaseObject
interface User extends BaseObject{
    username: string,
    email: string
}

interface Product extends BaseObject{
    name: string,
    price: number
}

interface Order extends BaseObject{
    numOrder: number
}

//Creamos una funcion para mostrar cualquier objeto que herede de BaseObject
function mostrarObjetos <T extends BaseObject>(obj: T): void{
    console.log(`\nID: ${obj.id}`)

    if ("username" in obj && "email" in obj){
        console.log(`Username: ${obj.username} \nEmail: ${obj.email}`)
    }else if ("name" in obj && "price" in obj){
        console.log(`Nombre: ${obj.name} \nPrecio: ${obj.price}`)
    }else if ("numOrder" in obj){
        console.log(`Numero de Orden: ${obj.numOrder}`)
    }
}


//Creamos los datos de cada interface
const usuario: User = {
    id: 1,
    username: "Duvier",
    email: "ddd@exam.com"
}

const producto: Product = {
    id: 2,
    name: "Tablet",
    price: 199000,
}

const order: Order = {
    id: 3,
    numOrder: 10
}

//Mostramos los datos de acuerdo al tipo
mostrarObjetos(usuario)
mostrarObjetos(producto)
mostrarObjetos(order)
