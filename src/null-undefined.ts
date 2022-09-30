let variableUndefined: undefined = undefined;
let variableNull : null = null;

interface Persona {
    nombre: string,
    apellido: undefined,
}

const conocido : Persona = {nombre:'Nombre de Fulano'};

function conocerNombre(persona: Persona): string{
    //return persona.apellido; //produce error
    return persona.nombre;
}