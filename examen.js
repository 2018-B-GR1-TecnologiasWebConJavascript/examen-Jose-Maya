
//1 BUSCAR TIPO TYPES, ABILITIES, MOVE EN DATA JSON

const fs = require('fs');
const distinct = require('rxjs/operators').distinct;

function leerArchivo(nombreArchivo) {

    return new Promise((resolve, reject) => {

            fs.readFile(nombreArchivo, 'utf-8', (error, contenidoData) => {

                if (error) {

                    reject(error);

                }

                else {

                    const starwars = JSON.parse(contenidoData);

                    resolve(starwars);

                }

            });

        } //fin resolve y reject

    ); //fin promesa

} //fin funcion

function identificarTypes(lista) {

    return new Promise((resolve) => {

        resolve(lista);

    });

}

leerArchivo('data.json')

    .then((ok) => {

        return identificarTypes(ok);

    })

    .then((contenido) => {

        console.log('TYPES: \n');

        let types = [];

        contenido.forEach((element) => {

            types.push(element.types);

        });

        console.log(types);

        console.log('ABILITIES: \n');

        let abilities = [];

        contenido.forEach((element) => {

            abilities.push(element.abilities);

            //

        });

        console.log(abilities);

        console.log('MOVE: \n');

        let move = [];

        contenido.forEach((element) => {

            move.push(element.move);

            //

        });

        console.log(move);

    });