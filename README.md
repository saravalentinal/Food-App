# MasterClass TN27

## App de gestion de comidas rapidas

### Objetivo

Debemos realizar una app que nos permita gestionar nuestro comercio de comidas rapidas. Para ello, debemos completar los siguientes requerimientos:

### Estructura 

1. Generar un archivo App que contendra nuestra aplicacion principal.
2. Obtener y guardar los archivos ubicados en la carpeta `Stock` en nuestra app.
3. Generar una carpeta `funciones` donde guardaremos todos nuestros modulos.
4. Crear un Objeto literal que contenga las siguientes propiedades:
```
clientes --> Array de objetos literales de tipo cliente.
barrios --> Array de nombres de los barrios disponibles para hacer envios.
pedidos --> Array de objetos literales de tipo pedidos.
menu --> Array de objetos literales con los diferentes menus disponibles y los elementos que debemos utilizar.
stock -->  Objeto literal que contiene los stock de nuestro comercio.
```
5. Al objeto literal le iremos agregando funcionabilidad para lograr la administracion completa de nuestro local.

### Funciones

#### Modulo Cliente
1. Generar una funcion `buscarCliente( usuario )` que devuelva un objeto literal con el usuario. De no existir, debera devolver `null`
2. Generar una funcion `crearCliente( cliente )` que cree un nuevo cliente en la key `clientes`. Si lo crea, debera devolver un `true`, de existir un error, debera devolver un `false`. Ojo, debera validar que no exista.
3. Generar una funcion `gastoCliente( usuario )` que devuelva el gasto que lleva el cliente. De no existir, debera devolver `null`
4. Generar una funcion `aumentarGasto( usuario, gasto)` que devuelva `true` si la operacion fue exitosa o `false` si ocurrio un error.

#### Modulo Barrio
1. Generar una funcion `barrioCubierto( barrio )` que devuelva `true` si se realizan envio al barrio o `false` de no llegar a esa zona.
2. Generar una funcion `agregarBarrio( barrio )`.

#### Modulo Pedido
1. Generar una funcion `crearPedido( pedido )` que cree un nuevo pedido en la key `pedidos`. Debera validar que el barrio este en zona de envio.
2. Generar una funcion `buscarPedido( id )` que devuelva un objeto literal con el pedido. De no existir, debera devolver `null`
3. Generar una funcion `buscarPedidoCliente( usuario )` que devuelva un array de pedidos de un cliente. De no existir, debera devolver un array vacio `[]`

#### Modulo Menu
1. Generar una funcion `buscarMenu( nombre )` que devuelva un objeto literal con el menu. De no existir, debera devolver `null`
2. Generar una funcion `ingredientesMenu( nombre)` que devuelva un array con los ingredientes. Ej ["medallon","lechuga","pan"]. De no existir devolver `null`
3. Generar una funcion `crearMenu( menu )` que devuelva `true` si la operacion fue exitosa o `false` si ocurrio un error.

#### Modulo Stock
1. Generar una funcion `validarStock( ingredientes )` que devuelva `true` si existen los ingredientes o `false` de no tenes al menos 1 ingrediente.
2. Generar una funcion `descontarStock( ingredientes )` que devuelva `true` si la operacion fue exitosa o `false` si ocurrio un error. Debera validar si existe stock.
3. Generar una funcion `agregarStock( ingrediente, cantidad )` que devuelva la cantidad total de ese ingrediente.

### Refactorizacion
Como devs debemos asegurar que nuestra aplicacion sea legible y podamos agregar nuevas funcionabilidades. En el paso de refactorizacion, vamos a crear en nuestra carpeta `funciones` 5 archivos. Una por cada modulo.
En ella, llevaremos cada una de las funciones realizadas en nuestra app.

### Testing
En todo momentos podremos usar nuestro `runTest` que nos permitira validar que estemos realizando nuestra app de manera correcta!

### Gracias por participar!
