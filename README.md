
npx cypress open

# 🚀 Automação de API com Cypress

Este projeto demonstra como automatizar testes de API utilizando o Cypress, com exemplos de boas práticas, organização de arquivos e uso de fixtures.

## 📦 Pré-requisitos
- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)

## ⚙️ Iniciando o projeto
1. Inicialize o projeto Node.js:
   ```bash
   npm init -y
   ```
2. Instale o Cypress:
   ```bash
   npm install cypress --save-dev
   ```
3. (Se já existir node_modules) apenas rode:
   ```bash
   npm install
   ```

## 🧪 Executando os testes
1. Abra o Cypress:
   ```bash
   npx cypress open
   ```
2. Execute os testes pela interface ou via terminal:
   ```bash
   npx cypress run
   ```

## 📁 Estrutura do Projeto

```
cypress/
  e2e/                # Testes organizados por operação
    get.api.cy.js
    post.api.cy.js
    put.api.cy.js
    delete.api.cy.js
    status_code_exceptions.api.cy.js
  fixtures/           # Dados de entrada (JSON)
    add_device.json
    update_device.json
    invalid_device.json
    device_list.json
    error_cases.json
  support/
    commands.js       # Comandos customizados do Cypress
    e2e.js
cypress.config.js     # Configuração do Cypress
package.json          # Dependências e scripts
README.md             # Documentação do projeto
```

## 🔗 API utilizada
- [restful-api.dev](https://restful-api.dev/)

## 💡 Dicas e boas práticas
- Use fixtures para separar dados de teste do código.
- Centralize requisições em comandos customizados (support/commands.js).
- Separe os testes por operação ou recurso.
- Adicione comentários explicativos nos testes.
- Valide status code, propriedades e mensagens de erro.

## 🤝 Contribuição
Sinta-se à vontade para abrir issues ou pull requests com sugestões, melhorias ou novos cenários de teste!
