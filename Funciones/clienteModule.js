function buscarCliente(usuarioDelCliente){
    let clienteBuscado = this.clientes.filter(cliente => cliente.usuario == usuarioDelCliente);
    if(clienteBuscado.length === 0) return null;
    return clienteBuscado[0];
}

function crearCliente(clienteParaAgregar){
    if(this.buscarCliente(clienteParaAgregar.usuario) === null){
        let arrayDeClientes = this.clientes;
        this.clientes.push(clienteParaAgregar);
        let arrayDeClientesJSON = JSON.stringify(arrayDeClientes);
        fs.writeFileSync("./BaseDatos/clientes.json", arrayDeClientesJSON);
        return true;
}
return false;
}

module.exports = {buscarCliente, crearCliente};