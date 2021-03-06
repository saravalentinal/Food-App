const fs = require('fs')
const path = require('path')

const CLIENTES = JSON.parse(fs.readFileSync(path.join(__dirname, '../BaseDatos/clientes.json'),'utf-8'))
const BARRIOS = JSON.parse(fs.readFileSync(path.join(__dirname, '../BaseDatos/barrios.json'),'utf-8'))
const PEDIDOS = JSON.parse(fs.readFileSync(path.join(__dirname, '../BaseDatos/pedidos.json'),'utf-8'))

const runTestPedido = (app) => {
    const errorsPedidos = []
    try {
        if ( app.pedidos ) {
            if( app.pedidos.length !== PEDIDOS.length) errorsPedidos.push( 'La importacion de pedidos no es valida.' )
    
            const pedidosError = app.pedidos.filter( pedido => {
                return typeof pedido.id !== 'string' || typeof pedido.usuario !== 'string' || typeof pedido.barrio !== 'string' || typeof pedido.costo !== 'number'
            })
    
            if ( pedidosError.length > 0 ) return errorsPedidos.push( 'Los pedidos no tienen los campos correctos.' )
        
            // Test Modulos 
            if ( app.buscarPedido) {
                try {
                    const pedidoBuscado = app.buscarPedido(PEDIDOS[PEDIDOS.length-1].id)
                    if ( pedidoBuscado === null || pedidoBuscado === undefined ) {
                        errorsPedidos.push( 'La funcion buscarPedido no devuelve el pedido buscado.' )
                    } else if ( Array.isArray(pedidoBuscado) ) {
                        errorsPedidos.push( 'La funcion buscarPedido debe devolver un objeto pedido.' )
                    } else if ( pedidoBuscado.usuario !== PEDIDOS[PEDIDOS.length-1].usuario ) {
                        errorsPedidos.push( 'La funcion buscarPedido devuelve un pedido diferente al buscado.' )
                    }
                    const pedidoNoExistente = app.buscarPedido( 'pedidoNoExistente' )
                    if ( pedidoNoExistente !== null ) errorsPedidos.push( 'La funcion buscarPedido debe devolver null si el pedido no existe.' )
                
                } catch (error) {
                    errorsPedidos.push("[ ERR-FATAL ] Ocurrio un error en el test de pedido en buscarPedido: ", error.message)
                }
            } else { 
                errorsPedidos.push( 'Nuestra app no tiene implementado la funcionabilidad de buscarPedido.' )
            }

            if ( app.crearPedido) {
                try {
                    const pedidoNuevoOk = {
                        id: Date.now(),
                        usuario: CLIENTES[0].usuario,
                        barrio: BARRIOS[0],
                        costo: 1300
                    }

                    const clienteNuevoErroneoBarrio = {
                        id: Date.now(),
                        usuario: CLIENTES[0].usuario,
                        barrio: `Barrio No existente${Date.now()}`,
                        costo: 1300
                    }

                    const clienteNuevoErroneoCliente = {
                        id: Date.now(),
                        usuario: `Usuario No existente${Date.now()}`,
                        barrio: BARRIOS[0],
                        costo: 1300
                    }

                    const pedidoExistente = PEDIDOS[0]

                    const deberaSerTrue = app.crearPedido(pedidoNuevoOk)
                    const deberaSerFalseDuplicado = app.crearPedido(pedidoExistente)
                    const deberaSerFalseBarrio = app.crearPedido(clienteNuevoErroneoBarrio)
                    const deberaSerFalseCliente = app.crearPedido(clienteNuevoErroneoCliente)

                    if (!deberaSerTrue) errorsPedidos.push( 'Al crear un pedido nuevo debera devolver true' )

                    if (deberaSerFalseDuplicado) errorsPedidos.push( 'Al intentar crear un pedido existente debera devolver false' )

                    if (deberaSerFalseBarrio) errorsPedidos.push( 'Al intentar crear un pedido con un barrio inexistente debera devolver false' )

                    if (deberaSerFalseCliente) errorsPedidos.push( 'Al intentar crear un pedido con un cliente inexistente debera devolver false' )


                } catch (error) {
                    errorsPedidos.push("[ ERR-FATAL ] Ocurrio un error en el test de pedido en crearPedido: ", error.message)
                }


            } else { 
                errorsPedidos.push( 'Nuestra app no tiene implementado la funcionabilidad de crearPedido.' )
            }

            if ( app.buscarPedidoCliente) {
                try {
                    const pedidoBuscadoCliente = app.buscarPedidoCliente(PEDIDOS[PEDIDOS.length-1].usuario)
                    if ( pedidoBuscadoCliente === null ) errorsPedidos.push( 'La funcion buscarPedidoCliente no devuelve el pedido buscado.' )
                    if ( !Array.isArray(pedidoBuscadoCliente) ) errorsPedidos.push( 'La funcion buscarPedidoCliente debe devolver un array de pedidos.' )
                    
                    if ( Array.isArray(pedidoBuscadoCliente) ) {
                        const errorPedido = pedidoBuscadoCliente.filter( pedido => {
                            return typeof pedido.id !== 'string' || ( typeof pedido.usuario !== 'string' && pedido.usuario !== PEDIDOS[PEDIDOS.length-1].usuario ) || typeof pedido.barrio !== 'string' || typeof pedido.costo !== 'number'
                        })

                        if ( errorPedido.length > 0 ) errorsPedidos.push( 'Los pedidos buscados no tienen los campos correctos.' )
                    }
                    
                    const pedidoNoExistente = app.buscarPedidoCliente( 'pedidoNoExistente' )
                    if ( !Array.isArray(pedidoNoExistente) ) {
                        errorsPedidos.push( 'La funcion buscarPedidoCliente debe devolver un array de pedidos.' ) 
                    } else if ( pedidoNoExistente.length > 0 ) {
                        errorsPedidos.push( 'La funcion buscarPedidoCliente debe devolver [] si el cliente buscado no tiene pedidos.' )
                    }
                
                } catch (error) {
                    errorsPedidos.push("[ ERR-FATAL ] Ocurrio un error en el test de pedido en buscarPedidoCliente: ", error.message)
                }
            } else { 
                errorsPedidos.push( 'Nuestra app no tiene implementado la funcionabilidad de buscarPedidoCliente.' )
            }

        
        } else {
            errorsPedidos.push( 'No existe pedidos en nuestra app.' )
        }
    
    } catch (error) {
        errorsPedidos.push("[ ERR-FATAL ] Ocurrio un error en el test de pedidos: ", error.message)
    }

    if (errorsPedidos.length === 0) {
        errorsPedidos.push('[ SUCCESS ] Test de pedidos pasado correctamente.')
    }

    return errorsPedidos
    
}


module.exports = runTestPedido