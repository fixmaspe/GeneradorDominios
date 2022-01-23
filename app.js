const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extend = [".com", ".us"]

for (let x of pronoun) {
    for (let j of adj) {
        for (let k of noun) {
            for (let h of extend) {
                console.log(x + j + k + h)
            }
        }
    }
}
//for...of

///es/docs / Web / JavaScript / Reference / Statements /
// for... of

// …La sentencia sentencia
//for... of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String…… La sintaxis de
//for... of es específica para las colecciones, y no para todos los objetos.……ECMAScript(ECMA - 262) La definición de 'for...of statement'
//en esta especificación.…//