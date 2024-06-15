import "./style.css";

interface GrupoMusical {
    nombre: string;
    añoDeFundacion: number;
    activo: boolean;
    generoMusical: string;
}

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const estiloTitulo = "font-weight:bold; font-size:16px; background-color:green";

const primerGrupoMusical: GrupoMusical  = {
    nombre: "The Beatles",
    añoDeFundacion: 1960,
    activo: true,
    generoMusical: popRock
}

const segundoGrupoMusical: GrupoMusical = {
    nombre: "Queen",
    añoDeFundacion: 1970,
    activo: false,
    generoMusical: rock
}

const tercerGrupoMusical: GrupoMusical = {
    nombre: "AC DC",
    añoDeFundacion: 1973,
    activo: true,
    generoMusical: hardRock
}

const compositor: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoDeFundacion: 1770,
    activo: false,
    generoMusical: clasica
}

const cuartoGrupoMusical: GrupoMusical = {
    nombre: "The Rolling Stones",
    añoDeFundacion: 1962,
    activo: true,
    generoMusical: rock
}

console.log(`%c${primerGrupoMusical.nombre}`, estiloTitulo);
console.log(`se fundó en ${primerGrupoMusical.añoDeFundacion}
activo: ${primerGrupoMusical.activo}
su género musical: ${primerGrupoMusical.generoMusical}`
);

console.log(`%c${segundoGrupoMusical.nombre}`, estiloTitulo);
console.log(`se fundó en ${segundoGrupoMusical.añoDeFundacion}
activo: ${segundoGrupoMusical.activo}
su género musical: ${segundoGrupoMusical.generoMusical}`
);

console.log(`%c${tercerGrupoMusical.nombre}`, estiloTitulo);
console.log(`se fundó en ${tercerGrupoMusical.añoDeFundacion}
activo: ${tercerGrupoMusical.activo}
su género musical: ${tercerGrupoMusical.generoMusical}`
);

console.log(`%c${compositor.nombre}`, estiloTitulo);
console.log(`nació en ${compositor.añoDeFundacion}
activo: ${compositor.activo}
su género musical: ${compositor.generoMusical}`
);

console.log(`%c${cuartoGrupoMusical.nombre}`, estiloTitulo);
console.log(`se fundó en ${cuartoGrupoMusical.añoDeFundacion}
activo: ${cuartoGrupoMusical.activo}
su género musical: ${cuartoGrupoMusical.generoMusical}`
);