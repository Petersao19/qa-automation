Cypress E2E – SauceDemo
-Este proyecto contiene pruebas automatizadas E2E desarrolladas con Cypress para validar el flujo de compra en la 
aplicación de pruebas SauceDemo.
-Las pruebas verifican que un usuario pueda iniciar sesión correctamente, agregar productos al carrito, 
validar la cantidad de productos seleccionados y completar el proceso de checkout hasta la confirmación final de la orden.
-El login se maneja mediante un comando personalizado (cy.login()), lo que permite reutilizarlo en distintos escenarios y mantener los tests organizados y fáciles de mantener.

API Testing
-El proyecto también incluye pruebas de API utilizando cy.request() para validar endpoints REST sin interfaz gráfica.
-Los tests están organizados por recurso dentro de la carpeta cypress/e2e/api/.
-Actualmente se validan: GET/posts, GET/users
Las pruebas verifican códigos de estado, estructura de la respuesta y propiedades clave del body utilizando una API pública de pruebas.