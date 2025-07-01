
// Teste para adicionar um novo dispositivo usando fixture
describe("Add device", () => {
  const payloadAddDevice = require('../fixtures/add_device.json');

  it("Add a specific device", () => {
    // Data atual para validação do campo createdAt
    const currentDate = new Date().toISOString().substring(0, 10);

    // Executa o comando customizado para adicionar o device
    cy.addDevice(payloadAddDevice).then((response) => {
      // Valida o status e as propriedades do device criado
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.not.be.empty;
      expect(response.body).to.have.property('name', 'Carol');
      expect(response.body.data).to.have.property('year', 2025);
      expect(response.body.data).to.have.property('price', 1849.99);
      expect(response.body.data).to.have.property('CPU model', 'Intel Core i9');
      expect(response.body.data).to.have.property('Hard disk size', '1 TB');
      expect(response.body.data).to.have.property('owner', 'Carol');
      expect(response.body.createdAt).to.not.be.empty;
      expect(response.body.createdAt.slice(0, 10)).to.equal(currentDate);
    });
  });
});
