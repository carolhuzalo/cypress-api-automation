// Teste para atualizar um dispositivo existente
describe("Update device", () => {
  const payloadAddDevice = require('../fixtures/add_device.json');
  const payloadUpdateDevice = require('../fixtures/update_device.json');

  it("Update specific device", () => {
    // Cria um novo device antes de atualizar
    cy.addDevice(payloadAddDevice).then((response_post) => {
      expect(response_post.status).to.equal(200);

      // Atualiza o device criado usando o comando customizado
      cy.updateDevice(response_post.body.id, payloadUpdateDevice).then((response_put) => {
        // Valida o status e as propriedades do device atualizado
        expect(response_put.status).to.equal(200);
        expect(response_put.body.name).to.equal('Carol Updated');
        expect(response_put.body.data.year).to.equal(2026);
        expect(response_put.body.data.price).to.equal(1999.99);
        expect(response_put.body.data['CPU model']).to.equal('Intel Core i9 Updated');
        expect(response_put.body.data['Hard disk size']).to.equal('2 TB');
        expect(response_put.body.data.owner).to.equal('Carol Updated');
        expect(response_put.body.updatedAt).to.not.be.empty;
        const currentDate = new Date().toISOString().substring(0, 10);
        expect(response_put.body.updatedAt.slice(0, 10)).to.equal(currentDate);
        expect(response_put.body.id).to.equal(response_post.body.id);
      });
    });
  });
});