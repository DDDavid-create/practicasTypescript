//* Programa que gestiona empleados de una empresa. Permite agregar, buscar empleados por su nombre y calcular el salario promedio de la lista de empleados


interface Empleado {
    nombre: string,
    apellido: string,
    puesto: string,
    salario: number
}


let empleados: Empleado[] = [];

function agregarEmpleado(empleado: Empleado): void {
    empleados.push(empleado)
}

function buscarEmpleadoPorNombre(nombre: string): Empleado | null {
    return empleados.find(empleado => empleado.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null
}

// Función para calcular el salario promedio
function calcularSalarioPromedio(): number {
    if (empleados.length === 0) return 0

    const sumaSalarios = empleados.reduce((total, empleado) => total + empleado.salario, 0)
    return sumaSalarios / empleados.length
}

agregarEmpleado({nombre: "Duvier Diego", apellido: "David", puesto: "Tecnico", salario: 1500000})
agregarEmpleado({nombre: "Duvan Steven", apellido: "Guzmán", puesto: "Aseador", salario: 1200000})
agregarEmpleado({nombre: "David", apellido: "Bohorquez", puesto: "Aseador", salario: 1200000})
agregarEmpleado({nombre: "Alejandro", apellido: "Arteaga", puesto: "Auxiliar", salario: 1300000})
agregarEmpleado({nombre: "Karol", apellido: "Ocoró", puesto: "Ayudante del Auxiliar", salario: 600000})

const empleadoBuscado = buscarEmpleadoPorNombre ("Karol")
console.log(`Estás buscando a: ${empleadoBuscado?.nombre}`)
if (empleadoBuscado){
    console.log(`Empleado/a encontrado/a!:
        Nombre: ${empleadoBuscado.nombre}
        Apellido: ${empleadoBuscado.apellido}
        Puesto: ${empleadoBuscado.puesto}
        Salario: ${empleadoBuscado.salario}`
    )
}else{
    console.log("Empleado no encontrado. Intenta de nuevo")
}

// Calcular y mostrar el salario promedio
const salarioPromedio = calcularSalarioPromedio();
console.log(`\nEl salario promedio de los empleados es: $${salarioPromedio.toFixed(2)}`);
