//* un programa que gestione las reservas de un hotel. El programa debe permitir agregar reservas, buscar reservas por nombre del huésped y calcular el ingreso total del hotel.

interface Reserva {
    nombreHuesped: string,
    valor: number
}

//Creamos un arreglo para agregar todas las reservas
let reservas: Reserva[] = []

//Creamos una funcion para agregar cada reserva al arreglo
function agregarReserva(reserva: Reserva) {
    reservas.push(reserva)
}

//Creamos una funcion para buscar la reserva por nombre del huesped
function buscarReservaPorNombre(nombre: string): Reserva | null {
    return reservas.find(reserva => reserva.nombreHuesped.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null
}

//Creamos una funcion para calcular el ingreso total del hotel por sus reservas
function calcularIngresoTotal(): number {
    if (reservas.length === 0) {
        console.log("No hay reservas")
        return 0
    }
    const ingresosTotal = reservas.reduce((total, reserva) => total + reserva.valor, 0)
    return ingresosTotal
}

//Agregamos reservas
agregarReserva({ nombreHuesped: "Duvan Alberto", valor: 120000 })
agregarReserva({ nombreHuesped: "David Pasoancho", valor: 500000 })
agregarReserva({ nombreHuesped: "José José", valor: 100000 })
agregarReserva({ nombreHuesped: "Maria José", valor: 399000 })
agregarReserva({ nombreHuesped: "Duvier Tocamelas", valor: 1000000 })

//Buscamos la reserva por el nombre del huesped
const huespedBuscado = buscarReservaPorNombre("ddd")
if (huespedBuscado) {
    console.log(`Reserva encontrada:
        Reserva a nombre de: ${huespedBuscado.nombreHuesped}
        Valor reserva: ${huespedBuscado.valor}`
    )
} else {
    console.log("Reserva no encontrada. Intente de nuevo")
}

//Mostramos los ingresos totales del hotel con las reservas
const totalIngresos = calcularIngresoTotal()
console.log(`El ingreso total del hotel por las reservas es de: $${totalIngresos.toFixed(2)}`)