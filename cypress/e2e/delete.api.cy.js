// Teste para deletar um dispositivo existente
describe("Delete device", () => {
  const payloadAddDevice = require('../fixtures/add_device.json');

  it("Delete a specific device", () => {
    // Cria um novo device antes de deletar
    cy.addDevice(payloadAddDevice).then((response_post) => {
      expect(response_post.status).to.equal(200);

      // Executa a requisição DELETE para remover o device criado
      cy.request({
        method: 'DELETE',
        url: `/objects/${response_post.body.id}`,
        failOnStatusCode: false,
      }).then((response_del) => {
        // Valida o status e a mensagem de confirmação da deleção
        expect(response_del.status).to.equal(200);
        expect(response_del.body.message).to.equal(`Object with id = ${response_post.body.id} has been deleted.`);
      });
    });
  });
});