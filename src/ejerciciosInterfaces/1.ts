//* Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una clase.

//Crear una interface Vehicle con propiedades comunes
interface Vehicle {
    model: string,
    year: number,
    color: string
}

//Crear interfaces Car y Motorcycle heredando propiedades de Vehicle
interface Car extends Vehicle{
    numSerie: number
}

interface Motorcycle extends Vehicle{
    tipo: string
}

class Venta implements Car{
    numSerie: number;
    model: string;
    year: number;
    color: string;

    constructor(serie: number, modelo: string, año: number, color: string){
        this.numSerie = serie;
        this.model = modelo;
        this.year = año;
        this.color = color;
    }
}

let ventaU = new Venta(123, "Hatchback", 2024, "amarillo");
console.log(`Venta encontrada: 
    N Serie: ${ventaU.numSerie}
    Modelo: ${ventaU.model}
    Año: ${ventaU.year}
    Color: ${ventaU.color}
    `)

