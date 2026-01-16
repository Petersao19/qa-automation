describe("API - Users", () => {
  it("GET /users devuelve lista de usuarios", () => {
    cy.request("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
      }
    );
  });

  it("GET /users/1 devuelve un usuario", () => {
    cy.request("https://jsonplaceholder.typicode.com/users/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("email");
      }
    );
  });
});
