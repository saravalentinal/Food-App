const finalTest = ( errors ) => {

    try {
        if (errors.length === 0) {
            console.log('Felicidades!!! Todos los tests pasaron.')
        } else {
            errors.map( error => error.startsWith("#") || error.startsWith("[") || error.startsWith(" ")
                                    ? console.log( error ) 
                                    : console.log( "# [ ERR ] " + error) )
        }
    } catch (error) {
        console.error("[ ERR-FATAL ] Ocurrio un error en el test final: ", error.message)
    }

    return
}

module.exports = finalTest