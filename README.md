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
