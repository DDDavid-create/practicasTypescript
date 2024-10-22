//* Programa que permite agregar libros y buscarlos por titulo. Además muestra todos los libros disponibles

type Libro = {
    titulo: string,
    autor: string,
    anioPublicacion: number
};

let biblioteca: Libro[] = []

// Función para agregar un libro a la biblioteca
function agregarLibro(libro: Libro): void {
    biblioteca.push(libro)
}

// Función para buscar libros por título
function buscarLibroPorTitulo(titulo: string): Libro | null {
    return biblioteca.find(libro => libro.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase()) || null
}

// Función para mostrar todos los libros disponibles
function mostrarLibros(): void {
    if (biblioteca.length === 0) {
        console.log('No hay libros disponibles en la biblioteca.')
        return
    }else{
        console.log('Libros disponibles en la biblioteca:')
        biblioteca.forEach(libro => {
            console.log(`\n- Título: ${libro.titulo} \nAutor: ${libro.autor} \nAño de Publicación: ${libro.anioPublicacion}`)
        })
    }
}

// Agregar libros a la biblioteca
agregarLibro({titulo: "Cien años de soledad", autor: "Gabriel García Marquez", anioPublicacion: 1994})
agregarLibro({titulo: "La bestia negra", autor: "Duvan Guzman", anioPublicacion: 1999})
agregarLibro({titulo: "La bella y el bruto", autor: "Duvier David", anioPublicacion: 2005})

mostrarLibros()

// Buscar un libro por título
const libroBuscado = buscarLibroPorTitulo("la bestia negra")
console.log(`\nEstás buscando: ${libroBuscado?.titulo}`)
if (libroBuscado) {
    console.log(`\nLibro encontrado: \n\tTítulo: ${libroBuscado.titulo} 
        Autor: ${libroBuscado.autor} 
        Año de Publicación: ${libroBuscado.anioPublicacion}`)
} else {
    console.log('Libro no encontrado.')
}
