const fs = require('fs')
const path = require('path')

const BARRIOS = JSON.parse(fs.readFileSync(path.join(__dirname, '../BaseDatos/barrios.json'),'utf-8'))

const runTestBarrio = (app) => {
    const errorsBarrios = []
    try {
        if ( app.barrrios ) {
            if( app.barrrios.length !== BARRIOS.length) errorsBarrios.push( 'La importacion de barrios no es valida.' )
    
            const barriosError = app.barrios.filter( barrio => {
                return typeof barrio !== 'string'
            })
    
            if ( barriosError.length > 0 ) errorsBarrios.push( 'Los barrios no tienen los campos correctos.' )
        
            // Test Modulos 
            if ( app.barrioCubierto) {

                const barrioExistente = app.barrioCubierto(BARRIOS[0])
                if (!barrioExistente) errorsBarrios.push( 'La funcion barrioCubierto debera devolver true si el barrio existe en la base de datos.' )

            } else { 
                errorsBarrios.push( 'Nuestra app no tiene implementado la funcionabilidad de barrioCubierto.' )
            }

            if ( app.agregarBarrio) {
                const barrioNuevoOk = `BARRIO-${Date.now()}`
                const barrioExistente = BARRIOS[0]

                const deberaSerTrue = app.agregarBarrio(barrioNuevoOk)
                const deberaSerFalseDuplicado = app.agregarBarrio(barrioExistente)

                if (deberaSerTrue) {
                    const barrioBuscado = app.barrios.filter(barrio => barrio === barrioNuevoOk)
                    if (barrioBuscado.length === 0) errorsBarrios.push( 'La funcion agregarBarrio no agrega el barrio nuevo.' )
                    if (barrioBuscado.length > 1) errorsBarrios.push( 'La funcion agregarBarrio no valida si el barrio ya existe.' )
                } else {
                    errorsBarrios.push( 'Al crear un barrio nuevo debera devolver true' )
                }

                if (!deberaSerFalseDuplicado) {
                    const barrioBuscado = app.barrios.filter(barrio => barrio === barrioExistente)
                    if (barrioBuscado.length !== 1) errorsBarrios.push( 'La funcion agregarBarrio no debera modificar si el barrio ya existe.' )
                } else {
                    errorsBarrios.push( 'Al intentar crear un barrio existente debera devolver false' )
                }
                
            } else { 
                errorsBarrios.push( 'Nuestra app no tiene implementado la funcionabilidad de agregarBarrio.' )
            }
        
        } else {
            errorsBarrios.push( 'No existe barrios en nuestra app.' )
        }
    } catch (error) {
        errorsBarrios.push("[ERROR-FATAL] Ocurrio un error en el test de barrios: ", error.message)
    }

    if (errorsBarrios.length === 0) {
        console.log('[SUCCESS] Test de barrios pasado correctamente.')
    }

    return errorsBarrios
}



module.exports = runTestBarrio