type Color5 = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

abstract class Transporte {

    _marca: string;
    _color: Color5;

    constructor(marca: string, color: Color5) {
        this._marca = marca;
        this._color = color;
    }

    descripcionVehiculo(): string {
        return `El vehículo es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El vehículo se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }

    protected obtenerVelocidad(): string {
        return '100 km/h';
    }
}

class Vehiculo5 extends Transporte {

    _numeroRuedas: number;

    constructor(marca: string, color: Color5, numeroRuedas: number) {
        super(marca, color);
        this._numeroRuedas = numeroRuedas;
    }

}

class Avion2 extends Transporte {

    _largoAlas: number;

    constructor(marca: string, color: Color5, largoAlas: number) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }

    descripcionVehiculo(): string {
        return `El avión es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El avión se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }
}

const vehiculo = new Vehiculo5('Nissan', 'azul', 4);
const avion2 = new Avion2('Boeing', 'blanco', 15);

function moverlosTodos(transportes: Array<Transporte>): void {
    for (const transporte of transportes) {
        console.log(transporte.moverse());
    }
}

moverlosTodos([vehiculo, avion2]);