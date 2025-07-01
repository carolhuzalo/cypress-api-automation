
Cypress.Commands.add('updateDevice', (deviceId, devicePayload) => {
  return cy.request({
    method: "PUT",
    url: `/objects/${deviceId}`,
    failOnStatusCode: false,
    body: devicePayload
  });
});

Cypress.Commands.add('fetchDevice', (deviceId) => { 
    return cy.request({
      method: "GET",
      url: `/objects/${deviceId}`,
      failOnStatusCode: false,
    });
});

Cypress.Commands.add('addDevice', (devicePayload) => {
  return cy.request({
    method: "POST",
    url: "/objects",
    failOnStatusCode: false,
    body: devicePayload
  });
});
