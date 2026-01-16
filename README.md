# Cypress E2E - SauceDemo
Este proyecto automatiza el flujo completo de compra en la web de pruebas [SauceDemo](https://www.saucedemo.com/) utilizando Cypress. 
El objetivo es validar que un usuario pueda iniciar sesión, agregar productos al carrito y completar el proceso de checkout exitosamente.

##Flujo cubierto
- Login exitoso con validación visual
- Agregar productos al carrito
- Validar cantidad en el carrito
- Completar formulario de compra
- Confirmar mensaje de orden completada

##Reutilización
El login está centralizado en un comando custom (`cy.login()`), lo que permite mantener los tests limpios, escalables y fáciles de mantener.

