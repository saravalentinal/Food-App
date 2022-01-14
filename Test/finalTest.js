const finalTest = ( errors ) => {

    try {
        errors.map( error => error.startsWith("#") || error.startsWith("[") || error.startsWith(" ")
                                    ? console.log( error ) 
                                    : console.log( "# [ ERR ] " + error) )

    } catch (error) {
        console.error("[ ERR-FATAL ] Ocurrio un error en el test final: ", error.message)
    }

    return
}

module.exports = finalTest