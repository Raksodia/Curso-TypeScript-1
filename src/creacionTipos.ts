type Perro = 'perro';
type Gato = 'gato';
type Pez = 'pez';
type Hamster = 'hamster';

type Mascota = Perro | Gato | Pez | Hamster;
let mascota: Mascota = 'perro';
//mascota = 'pajaro';//produce error

type ListaNombreAnimales = Array<string>;
const nombres: ListaNombreAnimales = ['Laika','Smoky','Bobby','Beethoven','Lassie'];

type UnionStringNumber = string | number;
let valor: UnionStringNumber = 10;
