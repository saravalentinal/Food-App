const runTestBarrio = require('./barrioTest')
const runTestCliente = require('./clienteTest')
const runTestPedido = require('./pedidoTest')
const finalTest = require('./finalTest')

const runTest = ( app ) => {
    try {
        console.log( '##########################################################')
        console.log( '####################### START TEST #######################')
        console.log( '##########################################################')
        let errors = []

        errors.push(' ')
        errors.push('###################### MODULO BARRIO #####################')
        errors.push(' ')
        errors.push( ...runTestBarrio(app) )
        errors.push(' ')
        errors.push('##################### MODULO CLIENTE #####################')
        errors.push(' ')
        errors.push( ...runTestCliente(app) )
        errors.push(' ')
        errors.push('###################### MODULO PEDIDO #####################')
        errors.push(' ')
        errors.push( ...runTestPedido(app) )
        errors.push(' ')

        finalTest(errors)
    } catch (error) {
        console.error("[ ERR-FATAL ] Ocurrio un error en la ejecucion del test: ", error.message)
    }
    console.log( '##########################################################')
    console.log( '######################## END TEST ########################')
    console.log( '##########################################################')
}

module.exports = runTest