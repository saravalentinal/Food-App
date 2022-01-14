const runTestBarrio = require('./barrioTest')
const runTestCliente = require('./clienteTest')
const runTestPedido = require('./pedidoTest')
const finalTest = require('./finalTest')

const runTest = ( app ) => {
    try {
        console.log( '####### START TEST #######')
        let errors = []

        errors.push( ...runTestBarrio(app) )
        errors.push( ...runTestCliente(app) )
        errors.push( ...runTestPedido(app) )

        finalTest(errors)
    } catch (error) {
        console.error("[ERROR-FATAL] Ocurrio un error en la ejecucion del test: ", error.message)
    }
    console.log( '####### END TEST #######')
}

module.exports = runTest