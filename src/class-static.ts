type Color7 = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

abstract class Transporte2 {

    _marca: string;
    _color: Color7;
    _numeroMotor = Transporte2.generarIdentificador();

    constructor(marca: string, color: Color7) {
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

    static generarIdentificador(): string {
        return Math.random().toString(36).slice(2);
    }
}

class Vehiculo7 extends Transporte2 {

    _numeroRuedas: number;

    constructor(marca: string, color: Color7, numeroRuedas: number) {
        super(marca, color);
        this._numeroRuedas = numeroRuedas;
    }

}

interface Piloto {
    id: string,
    nombre: string;
}

class Avion3 extends Transporte2 {

    _largoAlas: number;
    _piloto: Piloto | undefined;

    constructor(marca: string, color: Color7, largoAlas: number) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }

    descripcionVehiculo(): string {
        return `El avión es de marca ${this._marca} y es de color ${this._color}`;
    }

    moverse(): string {
        return `El avión se mueve a una velocidad de ${this.obtenerVelocidad()}`;
    }

    agregarPiloto(nombre: string): void {
        this._piloto = {
            id: Avion3.generarIdentificador(),
            nombre
        }
    }
}

const vehiculo7 = new Vehiculo7('Nissan', 'azul', 4);
const avion3 = new Avion3('Boeing', 'blanco', 15);

function moverlosTodos2(transportes: Array<Transporte2>): void {
    for (const transporte of transportes) {
        console.log(transporte.moverse());
    }
}

moverlosTodos2([vehiculo7, avion3]);