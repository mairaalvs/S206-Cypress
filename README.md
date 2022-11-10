# S206 - Qualidade de Software - Lista de Exercício
- Repositório para realização da lista de exercícios da disciplina de Qualidade de Software - S206. 

O projeto testa a interface do site [ServeRest](front.serverest.dev)

### Ambiente necessário para execução

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [VSCode](https://code.visualstudio.com/)

### 🚀 Como executar

- Clone este repositório
```
$ https://github.com/mairaalvs/S206-Cypress.git
```

- Abra o terminal na pasta do projeto e instale suas dependências:
```
npm install
```

- Para executar os testes através da interface do Cypress:
```
./node_modules/.bin/cypress open
```

- Para gerar o relatório de testes através de um arquivo html:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```

<p align="center"><img src="./testes/cypress/videos/testeServeRest.cy.js.gif" alt="Teste Serve Rest" /></p>