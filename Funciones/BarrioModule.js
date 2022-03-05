function barrioCubierto(barrioParaBuscar) {
            return !!this.barrios.find(barrio => barrio === barrioParaBuscar);
}

    function agregarBarrio(barrioParaAgregar){
        if(this.barrioCubierto(barrioParaAgregar) === false){
            let arrayDeBarrios = this.barrios;
            this.barrios.push(barrioParaAgregar);
            let arrayDeBarriosJSON = JSON.stringify(arrayDeBarrios);
            fs.writeFileSync("./BaseDatos/barrios.json", arrayDeBarriosJSON);
            return true;
        }
        return false;
}

module.exports = {barrioCubierto, agregarBarrio};