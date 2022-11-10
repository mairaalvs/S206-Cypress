/// <reference types="cypress"/> 

describe('Criando cenário de teste para o site serverest', () => {

  it('Caso de teste: Cadastrando um usuário no site com sucesso', () => { 
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('inatel')
    cy.get('[data-testid="email"]').type('maira@gmail.com')
    cy.get('[data-testid="password"]').type('inatel')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain.text', 'Cadastro realizado com sucesso')
  })

  it('Caso de teste: Cadastrando um usuário no site com falha, usuário ja existente', () => { 
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    let info = criarUsuario()
    cy.get('.alert > :nth-child(2)').should('have.text', 'Este email já está sendo usado')
  })

  it('Caso de teste: Realiza login no site com sucesso', () => { 
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('inatel@gmail.com')
    cy.get('[data-testid="senha"]').type('inatel')
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').should('contain.text', 'Serverest Store')
  })

  it('Caso de teste: Realiza login no site com falha', () => { 
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('inexistente@gmail.com')
    cy.get('[data-testid="senha"]').type('inatel')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos')
  })

  it('Caso de teste: Realizando logout no site com sucesso', () => { 
    let info = criarUsuario()
    cy.get('[data-testid="entrar"]').click()
    cy.login(info[1], info[2])
    cy.get('[data-testid="logout"]').click()
    cy.get('.font-robot').should('have.text', 'Login')
  })

  it('Caso de teste: Realizando pesquisa no site com falha', () => { 
    let info = criarUsuario()
    cy.get('[data-testid="entrar"]').click()
    cy.login(info[1], info[2])
    cy.get('[data-testid="pesquisar"]').type('celular')
    cy.get('[data-testid="botaoPesquisar"] > svg').click()
    cy.get('p').should('have.text', 'Nenhum produto foi encontrado')
  })
})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let nome = horas +  'nome'
  let email = 'inatel@gmail.com'
  let password = 'inatel'
  let userInfo = [nome, email, password]

  cy.visit('https://front.serverest.dev/cadastrarusuarios') 
  cy.get('[data-testid="nome"]').type(nome)
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="password"]').type(password)
  cy.get('[data-testid="cadastrar"]').click()

  return userInfo
}