const fs = require('fs')
const path = require('path')

const CLIENTES = JSON.parse(fs.readFileSync(path.join(__dirname, '../BaseDatos/clientes.json'),'utf-8'))
const BARRIOS = JSON.parse(fs.readFileSync(path.join(__dirname, '../BaseDatos/barrios.json'),'utf-8'))

const runTestCliente = (app) => {
    let errorsClientes = []
    try {
        if ( app.clientes ) {
            if( app.clientes.length !== CLIENTES.length) errorsClientes.push( 'La importacion de clientes no es valida.' )
            
            const clientesError = app.clientes.filter( cliente => {
                return typeof cliente.usuario !== 'string' || typeof cliente.mail !== 'string' || typeof cliente.barrio !== 'string'
            })    
            if ( clientesError.length > 0 ) return errorsClientes.push( 'Los clientes no tienen los campos correctos.' )
        
            // Test Modulos 
            if ( app.buscarCliente) {
                try {
                    const clienteBuscado = app.buscarCliente(CLIENTES[CLIENTES.length-1].usuario)

                    if ( clienteBuscado === null || clienteBuscado === undefined ) { 
                        errorsClientes.push( 'La funcion buscarCliente no devuelve el cliente buscado.' )
                    } else if ( Array.isArray(clienteBuscado) ) {
                        errorsClientes.push( 'La funcion buscarCliente debe devolver un objeto cliente.' )
                    } else if (clienteBuscado.usuario !== CLIENTES[CLIENTES.length-1].usuario ) {
                        errorsClientes.push( 'La funcion buscarCliente devuelve un cliente diferente al buscado.' )
                    }
                    
                    const clienteNoExistente = app.buscarCliente( 'clienteNoExistente' )
                    if ( clienteNoExistente !== null ) errorsClientes.push( 'La funcion buscarCliente debe devolver null si el cliente no existe.' )
                
                } catch (error) {
                    errorsClientes.push("[ ERR-FATAL ] Ocurrio un error en el test de clientes en buscarCliente: ", error.message)
                }
            } else { 
                errorsClientes.push( 'Nuestra app no tiene implementado la funcionabilidad de buscarClientes.' )
            }

            if ( app.crearCliente) {
                const clienteNuevoOk = {
                    usuario: `clienteNuevo${Date.now()}`,
                    mail: "clienteNuevo@mail.com",
                    barrio: BARRIOS[0]
                }

                const clienteNuevoErroneo = {
                    usuario: `clienteNuevo${Date.now()}`,
                    mail: "clienteNuevo@mail.com",
                    barrio: `Barrio No existente${Date.now()}`
                }

                const clienteExistente = CLIENTES[0]

                const deberaSerTrue = app.crearCliente(clienteNuevoOk)
                const deberaSerFalseDuplicado = app.crearCliente(clienteExistente)
                const deberaSerFalseBarrio = app.crearCliente(clienteNuevoErroneo)

                if (deberaSerTrue) {
                    const clienteBuscado = app.clientes.filter(cliente => cliente.usuario === clienteNuevoOk.usuario)
                    if (clienteBuscado.length === 0) errorsClientes.push( 'La funcion crearCliente no agrega el cliente nuevo.' )
                    if (clienteBuscado.length > 1) errorsClientes.push( 'La funcion crearCliente no valida si el cliente ya existe.' )
                } else {
                    errorsClientes.push( 'Al crear un cliente nuevo debera devolver true' )
                }

                if (!deberaSerFalseDuplicado) {
                    const clienteBuscadoDuplicado = app.clientes.filter(cliente => cliente.usuario === clienteExistente.usuario)
                    if (clienteBuscadoDuplicado.length !== 1) errorsClientes.push( 'La funcion crearCliente no debera modificar si el usuario ya existe.' )
                } else {
                    errorsClientes.push( 'Al intentar crear un cliente existente debera devolver false' )
                }

                if (!deberaSerFalseBarrio) {
                    const clienteBuscadoBarrio = app.clientes.filter(cliente => cliente.usuario === clienteExistente.usuario)
                    if (clienteBuscadoBarrio.length !== 0) errorsClientes.push( 'La funcion crearCliente no debera agregar si el usuario ya tiene un barrio erroneo.' )
                } else {
                    errorsClientes.push( 'Al intentar crear un cliente con un barrio inexistente debera devolver false' )
                }


            } else { 
                errorsClientes.push( 'Nuestra app no tiene implementado la funcionabilidad de crearCliente.' )
            }
        
        } else {
            errorsClientes.push( 'No existe clientes en nuestra app.' )
        }
    
    } catch (error) {
        errorsClientes.push("[ ERR-FATAL ] Ocurrio un error en el test de clientes: ", error.message)
    }

    if (errorsClientes.length === 0) {
        console.log('[ SUCCESS ] Test de clientes pasado correctamente.')
    }

    return errorsClientes
    
}

module.exports = runTestCliente