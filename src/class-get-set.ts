type Color2 = 'negro' | 'rojo' | 'azul' | 'amarillo';

class Vehiculo2 {

    private _marca: string | undefined;
    private _color: Color2 | undefined;
    private _numeroRuedas: number | undefined;

    //Modificadores de marca
    get marca(): string | undefined {
        return this._marca;
    }
    set marca(valor: string | undefined) {
        this._marca = valor;
    }

    //Modificadores de color
    get color(): Color2 | undefined {
        return this._color;
    }
    set color(valor: Color2 | undefined) {
        this._color = valor;
    }

    //Modificadores de numeroRuedas
    get numeroRuedas(): number | undefined {
        return this._numeroRuedas;
    }
    set numeroRuedas(valor: number | undefined) {
        this._numeroRuedas = valor;
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

const miVehiculo2 = new Vehiculo2();
miVehiculo2.marca = 'Nissan';
miVehiculo2.color = 'negro';
miVehiculo2.numeroRuedas = 4;

miVehiculo2.marca = 'Toyota';