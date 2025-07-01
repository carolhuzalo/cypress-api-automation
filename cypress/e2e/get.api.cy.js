// Teste para buscar um dispositivo específico pelo ID
describe("Fetch devices", () => {
  it("Fetch a specific device", () => {
    // Define o ID do device a ser buscado
    const deviceId = '7';
    // Executa o comando customizado para buscar o device
    cy.fetchDevice(deviceId)
      .then((response) => {
        // Valida o status e as propriedades do device retornado
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', deviceId);
        expect(response.body).to.have.property('name', 'Apple MacBook Pro 16');
      });
  });
});
