
type Color4 = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

class Vehiculo4 {

    _marca: string;
    _color: Color4;
    _numeroRuedas: number;

    constructor(marca: string, color: Color4, numeroRuedas: number = 0) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
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

class Avion1 extends Vehiculo4{

    _largoAlas: number;

    constructor(marca: string, color: Color4, largoAlas: number) {
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

const avion1 = new Avion1('Boeing', 'blanco', 15);
console.log(avion.descripcionVehiculo());