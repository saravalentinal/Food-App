const finalTest = ( errors ) => {

    try {
        if (errors.length === 0) {
            console.log('Felicidades!!! Todos los tests pasaron.')
        } else {
            errors.map( error => console.log( '[ERROR] ' + error ) )
        }
    } catch (error) {
        console.error("[ERROR-FATAL] Ocurrio un error en el test final: ", error.message)
    }

    return
}

module.exports = finalTest