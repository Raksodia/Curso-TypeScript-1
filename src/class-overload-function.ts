type Color8 = 'negro' | 'rojo' | 'azul' | 'amarillo' | 'blanco';

enum LiquidoVehiculo {
    Agua,
    Aceite,
    LiquidoFrenos
}

enum PiezasExterna {
    Llantas = 5,
    Pintura
}

class Vehiculo8 {
    _numeroRuedas: number;
    _marca: string;
    _color: Color8;

    constructor(marca: string, color: Color8, numeroRuedas: number) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }

    hacerMantenimiento(elemento: LiquidoVehiculo): void;
    hacerMantenimiento(elementoExterno: PiezasExterna): void;
    hacerMantenimiento(elemento: LiquidoVehiculo | PiezasExterna): void {
        if (elemento in LiquidoVehiculo) {
            console.log('Cambiando líquido del vehiculo...');
        } else {
            console.log('Cambiando una pieza del vehiculo');
        }
    }
}

const vehiculo8 = new Vehiculo8('Nissan', 'azul', 4);
vehiculo8.hacerMantenimiento(PiezasExterna.Llantas);
vehiculo8.hacerMantenimiento(LiquidoVehiculo.Aceite);