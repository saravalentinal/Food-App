const fs = require('fs');
const {agregarBarrio, barrioCubierto} = require('./Funciones/barrioModule');
const {buscarCliente, crearCliente} = require('./Funciones/clienteModule');
const {buscarPedido, crearPedido, buscarPedidoCliente} = require('./Funciones/pedidoModule');

let testFolder = './BaseDatos'
const archivos = fs.readdirSync(testFolder) 


const DATABASE = {}

function leerJSON(pathArchivo){
    let archivo = fs.readFileSync(pathArchivo, 'utf-8')
    return JSON.parse(archivo)
}

archivos.forEach( archivo => {
    const URL_ARCHIVO =  testFolder + '/' + archivo
    const DATA = leerJSON(URL_ARCHIVO)
    const NOMBRE_ENTIDAD = archivo.split(".")[0] 
    DATABASE[NOMBRE_ENTIDAD] = DATA
} )

const miApp = {
    barrios: DATABASE.barrios,
    clientes: DATABASE.clientes,
    pedidos: DATABASE.pedidos,
    barrioCubierto : barrioCubierto,
    agregarBarrio : agregarBarrio,
    buscarCliente : buscarCliente,
    crearCliente : crearCliente,
    buscarPedido: buscarPedido,
    crearPedido: crearPedido,
    buscarPedidoCliente: buscarPedidoCliente
}


console.log(miApp.agregarBarrio('Palermooo'));
module.exports = miApp;
