// Tipo numérico:
enum Floor {
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

let floor: Floor = Floor.Primero;

interface Cuartos {
    id: number,
    TypeFloor: TipoCuarto,
    floor: Floor,
    precioNoche: number
}

const room: Cuartos = {
    id: 10,
    TypeFloor: TipoCuarto.Individual,
    floor: Floor.Segundo,
    precioNoche: 80
}