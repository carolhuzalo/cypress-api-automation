// Testes para validar status code de exceção (404, 405, 400)
describe("Exception Status Code Tests", () => {
  // Testa se retorna 404 ao buscar um device inexistente
  it("should return 404 for non-existent device", () => {
    cy.request({
      method: "GET",
      url: "/objects/999999",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  // Testa se retorna 405 ao usar método inválido
  it("should return 405 for invalid method", () => {
    cy.request({
      method: "PUT",
      url: "/objects",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(405);
    });
  });

  
 });

