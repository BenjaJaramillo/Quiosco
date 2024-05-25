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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Registro de Progreso

25/05/2024

## Primera Actualizacion

Configuración del Proyecto - 10:44 am

Creación del Proyecto con npx-next.app@latest

TypeScript: Sí

ESLint: Sí

Tailwind CSS: Sí

Directorio src/: No

Router de la Aplicación: Sí

Alias de Importación (@/\*): No

## Segunda Actualizacion - 11:00 am

Creación de carpetas ProductPage y CreateProductPage

Creación de los contenedores principales

## Tercera Actualizacion - 11:50 am

Instalación de Prisma y generación del schema

npm i @prisma/client

npm i -D prisma

npx prisma init

Creación de la base de datos en render

## Cuarta Actualizacion - 12:15 pm

Modelos en Prisma

Comenzar a crear la base de datos

Migrar los productos cada vez que se hagan cambios

npx prisma migrate dev

## Quinta Actualizacion Seeding - 12:30

Agregar datos

instalar la dependencia de ts-node
npm i -D ts-node

ya confirado todo se obtuvieron los datos con el comando

npx prisma db seed

## Hasta aqui la app tiene base de datos y Contenedores principales- 1:00
