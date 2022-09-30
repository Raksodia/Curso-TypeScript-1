let fechaNacimiento: string | Date;
let pruebaTresTipos: string | number | boolean;
pruebaTresTipos = 'String';
pruebaTresTipos = 123;
//pruebaTresTipos = Array<string>; //Tipo de Dato Errado

function calcularPromedio(valores: number | number[], total?: number) : number | never {
    if(typeof valores === 'number' && total){
        return valores / total;
    }

    if(Array.isArray(valores) && valores.length > 0 ){
        return valores.reduce((acumulador,valorActual) => acumulador + valorActual,0) / valores.length;
    }

    throw Error('Parametros No Son Validos.')
}