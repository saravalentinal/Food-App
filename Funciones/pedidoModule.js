function buscarPedido(pedidoParaBuscar){
    let pedidoBuscado = this.pedidos.filter(pedido => pedido.id === pedidoParaBuscar);
    if(pedidoBuscado.length === 0) return null;
    return pedidoBuscado[0];
}

function crearPedido(pedidoParaAgregar){
    if(!this.buscarCliente(pedidoParaAgregar.usuario)) return false;
    if(!!this.buscarPedido(pedidoParaAgregar.id)) return false;
    if(!!this.barrioCubierto(pedidoParaAgregar.barrio)){
        let arrayDePedidos = this.pedidos;
        this.pedidos.push(pedidoParaAgregar);
        let arrayDePedidosJSON = JSON.stringify(arrayDePedidos);
        fs.writeFileSync("./BaseDatos/pedidos.json", arrayDePedidosJSON);
        return true;
    }
    return false;
}

function buscarPedidoCliente(usuario){
    return this.pedidos.filter(pedido => pedido.usuario === usuario);
}

module.exports = {buscarPedido, crearPedido, buscarPedidoCliente};