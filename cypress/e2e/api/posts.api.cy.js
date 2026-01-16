describe("API - Posts", () => {
  it("GET /posts devuelve lista de posts", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
      }
    );
  });

  it("GET /posts/1 devuelve un post específico", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
      }
    );
  });
});
