/********************************/

let cualquierValor: any = 'Un Valor String';
cualquierValor = 10;
cualquierValor = true;
cualquierValor = {};
cualquierValor = 'Le Vuelvo a Asignar un Valor';
console.log(cualquierValor);

/********************************/
//Una variable Unknow solo puede ser asignada a una variable Unknow
let variableUnknown: unknown = 10;
let variableString: string = cualquierValor;

//variableString = variableUnknow; //produce error
let otraVariableUnknown: unknown = variableUnknown; //no produce error

console.log(otraVariableUnknown);

/********************************/