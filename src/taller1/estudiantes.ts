//* un programa que gestione estudiantes de una escuela. El programa debe permitir agregar estudiantes, buscar estudiantes por nombre y calcular el promedio de notas de todos los estudiantes.

interface Estudiante {
    nombre: string,
    apellido: string,
    nota: number
}

//Crear un arreglo de estudiantes para agregar cada estudiante
let estudiantes: Estudiante[] = []

//Funcion para agregar estudiantes al arreglo
function agregarEstudiante(estudiante: Estudiante){
    estudiantes.push(estudiante)
}

//Funcion para buscar estudaintes por su nombre
function buscarEstudiantePorNombre (nombre: string): Estudiante | null {
    return estudiantes.find(estudiante => estudiante.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase()) || null
}

//Funcion para calcuiar el promedio de notas
function calcularPromedioNotas(): number {
    if (estudiantes.length === 0){
        console.log("No hay estudiantes ni notas para mostrar")
        return 0
    }

    const sumaNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0)
    return sumaNotas / estudiantes.length
}

// Agregar estudiantes
agregarEstudiante({nombre: "Karol", apellido: "Franco", nota: 5.0})
agregarEstudiante({nombre: "David", apellido: "Bohorquez", nota: 2.6})
agregarEstudiante({nombre: "Duvan", apellido: "Guzman", nota: 4.0})

//Buscamos el estudiante ingresado
const estudianteBuscado = buscarEstudiantePorNombre("David")
if (estudianteBuscado){
    console.log(`Estudiante encontrado/a:
        -Nombre: ${estudianteBuscado.nombre}
        -Apellido: ${estudianteBuscado.apellido}
        -Nota: ${estudianteBuscado.nota}`
    )
}else{
    console.log("Estudiante no encontrado/a")
}

//Mostramos el promedio de notas de todos los estudiantes agreegados
const promedioNota = calcularPromedioNotas()
console.log(`El promedio de las notas de todos los estudiantes es: ${promedioNota.toFixed(2)}`)