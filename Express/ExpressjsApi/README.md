# Project Management System -API

## Estructura inicial
Inicializacion de un proyecto JS con npm e instalacion de express y creacion del servidor  en server.js

-project-management-system-api
--package.json
--server.js
## Estructura final
Vamos a terner una estructura basada en un patron de arquitectura RCMS:

-project-management-system-api
--src
--routes
--controllers
--models
--servives
--middleware (funciones utilitarias que se desarrollan en express para ampliar su funcionalidad)
--database


## Middleware
Funciones o fregmentos de codigo que se ejecutan en medio del proceso de comunicacion
        
        Reuest -> Middleware * nCapas -> Routes -> controller -> Response


## Base de datos

* definimos una carpeta databse que aloja el db.js que es el fiechro que se encarga d ela s conexiones  y a instalacion de la base datos.
* Remplazamos  los proyectos y las tareas hardcodeadas por consultas a la base datos , esto se hace en los controladores.

Routes -> controllers-> Database

## agregar la capa de servicio -  service layer
* Extraer la parte transacional de la base de datos de los cosntroladores y lo separamos en el sevice layer.

Routes -> Controllores -> Services -> Database

Routes
definir endpoints

Controllers
Manejar el request y el response

Services
Logic de negocio

Database
Acceso a la base de datos