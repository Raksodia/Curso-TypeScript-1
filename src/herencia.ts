type Color3 = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

class Vehiculo3 {

    _marca: string;
    _color: Color3;
    _numeroRuedas: number;

    constructor(marca: string, color: Color3, numeroRuedas: number = 0) {
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

    private obtenerVelocidad(): string {
        return '100 km/h';
    }

}

class Avion extends Vehiculo3 {

    _largoAlas: number;

    constructor(marca: string, color: Color3, largoAlas: number) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }

    descripcionVehiculo(): string {
        return `El avión es de marca ${this._marca} y es de color ${this._color}`;
    }
}

const avion = new Avion('Boeing', 'blanco', 15);
console.log(avion.descripcionVehiculo());