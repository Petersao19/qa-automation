Proyecto de Automatización - Cypress (UI y API)

Este proyecto contiene pruebas automatizadas desarrolladas con Cypress, enfocadas tanto en pruebas 
End to End de interfaz como en pruebas de servicios REST.
La automatización se divide en dos partes principales: pruebas UI sobre la aplicación SauceDemo y 
pruebas de API sobre la plataforma PetStore Swagger.

PRUEBAS UI - SAUCEDEMO

Las pruebas de interfaz validan el flujo completo de compra en la aplicación de pruebas SauceDemo.

Escenarios cubiertos:
- Login exitoso
- Agregar productos al carrito
- Validar cantidad de productos
- Completar el proceso de checkout
- Confirmar mensaje de orden completada

El login se maneja mediante un comando personalizado, lo que permite reutilizarlo en distintos
 escenarios y mantener los tests organizados y fáciles de mantener.

PRUEBAS API - PETSTORE (USERS)

Las pruebas de API validan el recurso "Users" de la API pública PetStore Swagger.

Flujo cubierto:
- Crear un usuario
- Buscar el usuario creado
- Actualizar nombre y correo
- Buscar el usuario actualizado
- Eliminar el usuario

Se utilizan datos dinámicos para evitar conflictos entre ejecuciones y se validan tanto códigos 
de estado como el contenido de las respuestas.

INSTRUCCIONES DE EJECUCIÓN

1. Clonar el repositorio desde GitHub
2. Instalar dependencias con: npm install
3. Ejecutar Cypress: npx cypress open
4. Seleccionar el test de UI o API según se requiera

APIs utilizadas:
- SauceDemo: https://www.saucedemo.com/
- PetStore Swagger: https://petstore.swagger.io/v2