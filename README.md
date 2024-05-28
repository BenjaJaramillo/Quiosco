This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Registro de Progreso

## 25/05/2024

## Actualizacion 1

Configuración del Proyecto - 10:30 am

Creación del Proyecto con npx-next.app@latest

TypeScript: Sí

ESLint: Sí

Tailwind CSS: Sí

Directorio src/: No

Router de la Aplicación: Sí

Alias de Importación (@/\*): No

## Actualizacion 2 - 11:00 am

Creación de carpetas ProductPage y CreateProductPage

Creación de los contenedores principales

## Actualizacion 3 - 11:50 am

Instalación de Prisma y generación del schema

npm i @prisma/client

npm i -D prisma

npx prisma init

Creación de la base de datos en render

## Actualizacion 4 - 12:15 pm

Modelos en Prisma

Comenzar a crear la base de datos

Migrar los productos cada vez que se hagan cambios

npx prisma migrate dev

## Actualizacion 5 Seeding - 12:30

Agregar datos

instalar la dependencia de ts-node
npm i -D ts-node

ya configurado todo se obtuvieron los datos con el comando:

npx prisma db seed

## Hasta aqui la app tiene base de datos y Contenedores principales- 13:00

## Actualizacion 6 Data Fetching en Next.js - 13:00

Hasta aqui la app obtiene datos de manera correcta
y los muestra en consola

## Actualizacion 7 iterando sobre las categorias 13:30

Hasta aqui la aplicacion muestra ya en el servidor las categorias de la base de datos

## Actualizacion 8 Mostrando las Categorias y los iconos 13:50

Hasta aqui la aplicacion muestra el icono junto con su nombre en el servidor

## Actualizacion 9 Routing dinamico- 14:00

Hasta aqui la aplicacion detecta el click en categoria

## Actualizacion 10 Detectar la categoria actual y obtener los productos 15:00

La aplicacion al dar click en la categoria muestra una consulta a la base de datos de los productos en existencia

## Actualizacion 11 iterando sobre productos 15:20

La aplicacion ya muestra los paquetes y sus precios en el servidor

## Actualizacion 12 Finalizando los Card de productos 15:30

Muestra los componentes de los productos, imagen y boton para agregar al pedido

## Actualizacion 13 Resaltando la categoria actual 15:40

Resalta la categoria en la cual nos encontramos

## Actualizacion 14 Se creo el Store de Zustand 15:50

npm i zustand

## Actualizacion 15 consume el state de orden 16:00

La aplicacion consume el store, la orden aparece en pedido por el momento muestra el texto carrito esta vacio

## Actualizacion 16 Comunica el boton con la store 16:10

Agrega elementos a nuestra orden pero lo muestra en consola

## Actualizacion 17 Agrega articulas a la orden 16:25

La aplicacion ya agrega elementos a la orden visualmente por el momento muestra el mensaje si hay o no hay algo en el carrito

## Actualizacion 18 Mostrando los articulos a la orden 16:35

La aplicacion ya muestra mi pedido con la descripcion cantidad, precio y subtotal.
Visualmente en el servidor

## Actualizacion 19 Evita duplicados 16:50

Al presionar multiples veces en el articulo ya no añade el mismo solucionado

Ademas si presionas el boton agregar se actualiza la cantidad de producto y el subtotal

## Actualizacion 20 Incrementando la Cantidad de un articulo 17:05

Se hizo funcionar el boton de + para incrementar las cantidades

## Actualizacion 21 Decrementando la Cantidad de un articulo 17:20

Se Habilita el boton de - para quitar articulos y se actualiza el subtotal con ello

## Actualizacion 22 Eliminar Articulos de la Orden 17:30

Se habilita el boton x para quitar articulos del carrito

## Actualizacion 23 Calculando Total a pagar 17:40

La aplicacion te dice el total a pagar de varios articulos

## Hasta aqui la aplicacion ya hace toda la parte de las ordenes

## 26/05/2024

## Actualizacion 24 Creacion modelo de ordenes 10:34

Actualizacion base de datos para guardar ordenes

## Actualizacion 25 Configuracion Boton Confirmar Pedido 10:50

La aplicacion ya tiene el boton de confirmar pedido

## Actualizacion 26 Creacion Server Actions 11:00

Se incorpara la accion del boton de confirmar pedido

## Actualizacion 27 Recupera Datos de formulario con fromData 11:10

Se incorporo un input para que los usuarios puedan escribir su nombre y alamacenarlo en la orden

## Actualizacion 28 Valida datos con ZOD en el cliente 11:20

Comandos ZOD:
npm i zod

valida tanto el cliente como el servidor

## Actualizacion 29 Muestra errores de validacion con Toast 13:11

La aplicacion muestra el mensaje de al cliente de que su nombre debe ser obligatorio
npm i react-toastify

## Actualizacion 30 Valida datos con ZOD en el servidor 13:20

La aplicacion muestra los mismos mensajes que la actualizacion 29 pero ahora desde el servidor

## Actualizacion 31 Valida el resto de la orden 13:30

La aplicacion valida el resto de la orden

## Actualizacion 32 Ingresa Datos a la base de datos 13:35

La aplicacion ingresa ordenes a la base

## Actualizacion 33 Evita Ordenes duplicadas 13:40

Al momento de presionar agregar pedido la app lanza mensaje de orden agregada

## Hasta aqui la aplicacion ya hace todo lo relacionado con el pedido

## Actualizacion 34 Creando las rutas y layout 15:00

Tanto el quiosco y el Panel de admin renderiza el Logo

## Actualizacion 35 Navegacion en el panel de administracion 15:10

Contenedores y formato para el panel de administracion completado

## Actualizacion 36 Obtiene las ordenes pendientes 15:20

Obtinee la ordenes de la base de datos y las muestra en consola

## Actualizacion 37 Muestra las ordenes pendientes 15:30

Muestra las ordenes ahora si en el panel de administarcion del servidor visualmente

## Actualizacion 38 Muestra el contenido de la orden 17:00

La aplicacion muestra de manera detallada la orden y se le dio formato para que se visualizara mas amigable la interfaz grafica.

## Actualizacion 39 La aplicacion hace la accion para completar las ordenes 17:06

Se tiene el esqueleto para empezar a manipular la accion de compeltar ordenes

## Actualizacion 40 Marca ordenes como completadas y validacion 17:20

La aplicacion marca como completa la orden, cambia el estado y muestra la hora en la cual se completo

## Actualizacion 41 Revalida datos con next.js 17:25

Revalida de forma manual nuestros datos

## Hasta aqui ya esta toda la parte de ordenes de la aplicacion

## 27/05/2024

## Actualizacion 42 Lista los productos 10:30

Se comienza a realizar el apartado de productos
se muestra en el servidor el producto, precio, categoria y editar

## Actualizacion 43 Incluye la categoria en la tabla 10:40

Muestra la categoria del producto ya que antes la aplicacion mostraba solo el id de la categoria

## Actualizacion 44 Crea un paginador 10:50

Para que no tarde la pagina en recargar los productos los muestra de 10 en 10

## Actualizacion 45 Creando routing para navegar en el paginador 11:00

La aplicacion tiene los botones para navegar entre el paginador

## Actualizacion 46 Calcula total de paginas 17:00

En esta actualizacion se le da estilo al boton de paginacion y se le añade el limite de paginas

## Actualizacion 47 Se añadio el boton de pagina anterior 17:10

En esta actualizacion se añadio el boton de regresar pagina y se añadieron validaciones

## Actualizacion 48 Se añadio paginador por numeros 17:15

Se añade numero de pagina y se le da estilos al boton

## Actualizacion 49 Se añade un formulario de busqueda de productos 17:22

Se añadio el boton de crear prosuctos y el buscador de productos, falta añadir las acciones de dichos botones

## Actualizacion 50 Validando el buscador 17:30

Pasa la validacion de buscar por producto muestra mensaje cuando el campo esta vacio y redirecciona al apartado de busqueda

## Actualizacion 51 Recupera el valor de busqueda 17:35

Recupera el valor pero en consola, todavia no lo muestra visualmente

## Actualizacioin 52 Muestra los resultados de busqueda 17:45

Muestra los resultados de busqueda de manera visual y busca por palabra

## Hasta aqui la aplicacion tiene el apartado administrar los productos y buscarlos

## Actualizacion 53 Routing y Formulario para crear productos 17:55

Se hizo el formulario para añadir producto y se le dio estilos

## Actualizacion 54 Muestra las categorias en el formulario 18:10

Obtiene las categorias en el formulario

## Actualizacion 55 resuelve problemas cliente servidor 18:15

## Actualizacion 56 Composicion para utilizar server components dentri de client components 18:25

La aplicacion ya no tiene errores de cliente servidor

## Actualizacion 57 Valida la creacion de productos 18:35

La aplicacion crea productos pero solo los muestra en consola y manda mensajes de retroalimentacion

## Actualizacion 58 Cloudinary para subir imagenes 18:40

instalar
apikey: 372731215185468
npm i next-cloudinary
configuraciones de cloudinary para poder subir imagenes

## Actualizacion 59 Crea el Componente para subir imagenes 18:50

sube imagenes con next-cloudinary
uploadPreset="gshf8l3w"

## Actualizacion 60 Obtiene la URL de la imagen que se sube 19:00

Se sube de manera visual al apartado de imagenes

## Actualizacion 61 Almacenando el Producto a la base de datos 19:10

Guardar el producto con sus respectivos campos en el formulario

## Hasta aqui la aplicacion en el apartado de administrar productos , crea productos , busca productos y guarda los productos creados

## 28/05/2024

## Actualizacion 62 Obtiene el producto a editar 8:30

La aplicacion ya tiene la pagina editar y el apartado not-found cunado el usuario digita un producto que no existe

## Actualizacion 63 Ajusta el formulario de edicion y llena los campos automaticamente 8:40

El Formulario de editar obtiene los valores d elos productos actuales y llena el formulario de manera automatica

## Actualizacion 64 Valida las imagenes 8:50

Esta actualzacion muestra la imagen actual y despues la esconde cuando se sube la nueva imagen (EditProduct)

## Actualizacion 65 Guarda los cambios de Productos 9:00

Todo lo relacionado con edit productos funciona
