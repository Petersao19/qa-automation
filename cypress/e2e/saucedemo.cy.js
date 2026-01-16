describe("Flujo E2E SauceDemo", () => {
  beforeEach(() => {
    cy.login();  
  });

  it("Agrega productos al carrito", () => {
    cy.log("STEP 1 - Login exitoso");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("be.visible").click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should("be.visible").click();
    cy.get(".shopping_cart_badge").should("contain", "2");
  });

  it("Completa el checkout exitosamente", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Peter");
    cy.get('[data-test="lastName"]').type("Bazurto");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");
  });
});
