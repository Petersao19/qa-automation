describe("API - PetStore Users", () => {
  const baseUrl = "https://petstore.swagger.io/v2";
  const username = `user_${Date.now()}`;

  const userData = {
    id: Date.now(),
    username: username,
    firstName: "Peter",
    lastName: "QA",
    email: "peter@test.com",
    password: "EcuadorMundial",
    phone: "0962723466",
    userStatus: 1,
  };

  it("Crear un usuario", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/user`,
      body: userData,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Buscar el usuario creado", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/user/${username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(username);
      expect(response.body.email).to.eq("peter@test.com");
    });
  });

  it("Actualizar nombre y correo del usuario", () => {
    const updatedUser = {
      ...userData,
      firstName: "Peter Mundial",
      email: "peter.mundial@test.com",
    };

    cy.request({
      method: "PUT",
      url: `${baseUrl}/user/${username}`,
      body: updatedUser,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Buscar el usuario actualizado", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/user/${username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq("Peter Mundial");
      expect(response.body.email).to.eq("peter.mundial@test.com");
    });
  });

  it("Eliminar el usuario", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/user/${username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
