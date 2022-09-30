// Tipo numérico:
enum Piso1 {
    Primero = 1,
    Segundo,
    Tercero,
}

// Tipo string:
enum TipoCuarto {
    Individual = 'individual',
    Doble = 'doble',
    Triple = 'triple'
}

let piso: Piso1 = Piso1.Primero;

interface Cuarto1 {
    id: number,
    tipo1: TipoCuarto,
    piso2: Piso1,
    precioNoche: number
}

const cuarto: Cuarto1 = {
    id: 10,
    tipo1: TipoCuarto.Individual,
    piso2: Piso1.Segundo,
    precioNoche: 80
}