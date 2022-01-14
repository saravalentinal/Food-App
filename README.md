# MasterClass TN27

## App de gestion de comidas rapidas

### Objetivo

Debemos realizar una app que nos permita gestionar nuestro comercio de comidas rapidas ubicado en la Capital Federal de la ciudad de Buenos Aires, Argentina. Para ello, debemos completar los siguientes requerimientos:

### Estructura 

1. Generar un archivo App que contendra nuestra aplicacion principal.
2. Obtener y guardar los archivos ubicados en la carpeta `BaseDatos` en nuestra app.
3. Generar una carpeta `Funciones` donde guardaremos todos nuestros modulos.
4. Crear un Objeto literal que contenga las siguientes propiedades:
```
barrios --> Array de nombres de los barrios disponibles para hacer envios.
clientes --> Array de objetos literales de tipo cliente.
pedidos --> Array de objetos literales de tipo pedidos.
```
5. Al objeto literal le iremos agregando funcionabilidad para lograr la administracion completa de nuestro local.

### Entidades

```javascript 
const BARRIO = string
```
```javascript 
const CLIENTE = {
    "usuario": string,
    "mail": string,
    "barrio": string
} 
```
```javascript 
const PEDIDO = {
    "id": string // Usar Date.now()
    "usuario": string,
    "barrio": string,
    "costo": number
}
```

### Funciones

#### Modulo Barrio
1. Generar una funcion `barrioCubierto( barrio )` que devuelva `true` si se realizan envio al barrio o `false` de no llegar a esa zona.
2. Generar una funcion `agregarBarrio( barrio )`. Si lo crea, debera devolver un `true`, de existir un error, debera devolver un `false`. Ojo, debera validar que no exista.

#### Modulo Cliente
1. Generar una funcion `buscarCliente( usuario )` que devuelva un objeto literal con el usuario. De no existir, debera devolver `null`
2. Generar una funcion `crearCliente( cliente )` que cree un nuevo cliente en la key `clientes`. Si lo crea, debera devolver un `true`, de existir un error, debera devolver un `false`. Ojo, debera validar que no exista.

#### Modulo Pedido
1. Generar una funcion `buscarPedido( id )` que devuelva un objeto literal con el pedido. De no existir, debera devolver `null`
2. Generar una funcion `crearPedido( pedido )` que cree un nuevo pedido en la key `pedidos`. Debera validar que el barrio este en zona de envio. Si el cliente no existe, debera devolver un `false`. Si lo crea, debera devolver un `true`, de existir un error, debera devolver un `false`. Ojo, debera validar que no exista.
3. Generar una funcion `buscarPedidoCliente( usuario )` que devuelva un array de pedidos de un cliente. De no existir, debera devolver un array vacio `[]`

### Refactorizacion
Como devs debemos asegurar que nuestra aplicacion sea legible y podamos agregar nuevas funcionabilidades. En el paso de refactorizacion, vamos a crear en nuestra carpeta `Funciones` 3 archivos. Una por cada modulo.
En ella, llevaremos cada una de las funciones realizadas en nuestra app.

### Testing
En todo momentos podremos usar nuestro `runTest` que nos permitira validar que estemos realizando nuestra app de manera correcta!

### Atencion
No hay que modificar los archivos que se encuentran en la carpeta `BaseDatos` y en `Test`. La app podria fallar y no contamos con DBA (Administrador de Base de Datos) o QA para que nos den soporte el fin de semana 👎.

### Gracias por participar!
